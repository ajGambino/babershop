import os
import re
import requests
import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# URLs of the archived pages
base_url = 'https://web.archive.org/web/'
index_page_url = '20190905024907/http://barbershopstyles.com/pgh/'
services_page_url = '20190904064140/http://barbershopstyles.com/pgh/services-3/'
location_page_url = '20190904095911/http://barbershopstyles.com/pgh/location/'
store_hours_page_url = '20190904095911/http://barbershopstyles.com/pgh/store-hours-2/'

# Directories to store the files (assuming these already exist in your project)
css_dir = 'css'
js_dir = 'js'
img_dir = 'img'

# Function to sanitize and create local filenames
def sanitize_filename(filename):
    return "".join([c if c.isalnum() or c in ' ._-' else '_' for c in filename])

# Function to download and save files with exponential backoff
def download_file(url, folder):
    local_filename = sanitize_filename(url.split('/')[-1].split('?')[0])
    local_path = os.path.join(folder, local_filename)
    
    for attempt in range(5):  # Retry up to 5 times with exponential backoff
        try:
            with requests.get(url, stream=True) as r:
                r.raise_for_status()
                with open(local_path, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)
            return local_path
        except requests.exceptions.HTTPError as http_err:
            if r.status_code == 409:
                print(f"Conflict error for URL {url}. Skipping...")
                return None
            print(f"Attempt {attempt + 1} failed for URL {url}: {http_err}")
            time.sleep(2 ** attempt)  # Exponential backoff
        except requests.exceptions.RequestException as req_err:
            print(f"Attempt {attempt + 1} failed for URL {url}: {req_err}")
            time.sleep(2 ** attempt)  # Exponential backoff
    print(f"Failed to download {url} after multiple attempts.")
    return None

def download_resources(soup, tag, attribute, output_folder, valid_extensions=None):
    for element in soup.find_all(tag):
        if attribute in element.attrs:
            resource_url = urljoin(base_url, element[attribute])
            # Filter out non-static resources
            if valid_extensions:
                if not any(resource_url.endswith(ext) for ext in valid_extensions):
                    continue
            # Replace Wayback Machine's URL with the actual archive link
            if resource_url.startswith('/web/'):
                resource_url = urljoin('https://web.archive.org', resource_url)
            print(f"Downloading {resource_url}")
            try:
                download_file(resource_url, output_folder)
            except requests.exceptions.RequestException as e:
                print(f"Failed to download {resource_url}: {e}")

# Function to process a webpage and download resources
def process_page(page_url, css_dir, js_dir, img_dir):
    response = requests.get(page_url)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, 'html.parser')

    # Download images
    download_resources(soup, 'img', 'src', img_dir, valid_extensions=['.png', '.jpg', '.jpeg', '.gif', '.svg'])

    # Download CSS files
    download_resources(soup, 'link', 'href', css_dir, valid_extensions=['.css'])

    # Download JS files
    download_resources(soup, 'script', 'src', js_dir, valid_extensions=['.js'])

    # Save the HTML file
    html_file_path = sanitize_filename(urlparse(page_url).path) + '.html'
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(soup.prettify())

    print(f"Scraping of {page_url} complete.")

# Process index, services, location, and store hours pages
process_page(urljoin(base_url, index_page_url), css_dir, js_dir, img_dir)
process_page(urljoin(base_url, services_page_url), css_dir, js_dir, img_dir)
process_page(urljoin(base_url, location_page_url), css_dir, js_dir, img_dir)
process_page(urljoin(base_url, store_hours_page_url), css_dir, js_dir, img_dir)

print("All downloads completed.")
