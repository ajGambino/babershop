import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# The Wayback Machine URL for the services page
base_url = 'https://web.archive.org/web/20190904064140/http://barbershopstyles.com/pgh/services-3/'
output_dir = '../css'
img_dir = os.path.join(output_dir, 'img')
css_dir = os.path.join(output_dir, 'css')
js_dir = os.path.join(output_dir, 'js')

# Create directories if they don't exist
os.makedirs(img_dir, exist_ok=True)
os.makedirs(css_dir, exist_ok=True)
os.makedirs(js_dir, exist_ok=True)

def sanitize_filename(filename):
    return "".join([c if c.isalnum() or c in ' ._-' else '_' for c in filename])

def download_file(url, dest_folder):
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
    parsed_url = urlparse(url)
    filename = os.path.basename(parsed_url.path)
    filename = sanitize_filename(filename)  # Sanitize the filename
    local_filename = os.path.join(dest_folder, filename)
    # Check if file already exists
    if not os.path.isfile(local_filename):
        with requests.get(url, stream=True) as r:
            r.raise_for_status()
            with open(local_filename, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
    return local_filename

def download_resources(soup, tag, attribute, output_folder):
    for element in soup.find_all(tag):
        if attribute in element.attrs:
            resource_url = urljoin(base_url, element[attribute])
            # Filter out non-static resources
            if not resource_url.endswith(('xmlrpc.php', '.php', '.asp', '.aspx')):
                # Replace Wayback Machine's URL with the actual archive link
                if resource_url.startswith('/web/'):
                    resource_url = urljoin('https://web.archive.org', resource_url)
                print(f"Downloading {resource_url}")
                try:
                    download_file(resource_url, output_folder)
                except requests.exceptions.RequestException as e:
                    print(f"Failed to download {resource_url}: {e}")

# Fetch the webpage content
response = requests.get(base_url)
soup = BeautifulSoup(response.content, 'html.parser')

# Download images
download_resources(soup, 'img', 'src', img_dir)

# Download CSS files
download_resources(soup, 'link', 'href', css_dir)

# Download JS files
download_resources(soup, 'script', 'src', js_dir)

# Save the HTML file
html_file_path = os.path.join(output_dir, 'services.html')
with open(html_file_path, 'w', encoding='utf-8') as file:
    file.write(soup.prettify())

print('Scraping complete.')
