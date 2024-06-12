import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Directory to save CSS, JavaScript, and image files
css_dir = 'css'
js_dir = 'js'
img_dir = 'images'

if not os.path.exists(css_dir):
    os.makedirs(css_dir)

if not os.path.exists(js_dir):
    os.makedirs(js_dir)

if not os.path.exists(img_dir):
    os.makedirs(img_dir)

# URLs of the CSS files to download
css_urls = [
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-includes/css/dist/block-library/style.min.css?ver=5.1.1',
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-includes/css/dist/block-library/theme.min.css?ver=5.1.1',
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-content/themes/x/framework/dist/css/site/stacks/integrity-dark.css?ver=6.5.5',
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-content/themes/x/framework/legacy/cranium/dist/css/site/integrity-dark.css?ver=6.5.5',
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-content/themes/x/framework/dist/css/site/stacks/integrity-light.css?ver=6.5.5',
    'https://web.archive.org/web/20190904064140cs_/http://barbershopstyles.com/wp-content/themes/x/framework/legacy/cranium/dist/css/site/integrity-light.css?ver=6.5.5',
]

# Function to download files
def download_file(url, directory):
    response = requests.get(url)
    if response.status_code == 200:
        parsed_url = urlparse(url)
        filename = os.path.join(directory, os.path.basename(parsed_url.path))
        with open(filename, 'wb') as file:
            file.write(response.content)
        print(f'Downloaded: {filename}')
    else:
        print(f'Failed to download: {url}')

# Function to download image files
def download_img_file(url, directory):
    response = requests.get(url)
    if response.status_code == 200:
        parsed_url = urlparse(url)
        filename = os.path.join(directory, os.path.basename(parsed_url.path))
        with open(filename, 'wb') as file:
            file.write(response.content)
        print(f'Downloaded: {filename}')
    else:
        print(f'Failed to download: {url}')

# Download CSS files
for url in css_urls:
    download_file(url, css_dir)

# URL of the page to scrape for JavaScript files
page_url = 'https://web.archive.org/web/20190904064140/http://barbershopstyles.com/pgh/'

# Function to download JavaScript files
def download_js_file(url, directory):
    response = requests.get(url)
    if response.status_code == 200:
        parsed_url = urlparse(url)
        filename = os.path.join(directory, os.path.basename(parsed_url.path))
        with open(filename, 'wb') as file:
            file.write(response.content)
        print(f'Downloaded: {filename}')
    else:
        print(f'Failed to download: {url}')

# Get the page content
response = requests.get(page_url)
if response.status_code != 200:
    raise Exception(f'Failed to load page: {page_url}')

# Parse the HTML
soup = BeautifulSoup(response.content, 'html.parser')

# Find all script tags
script_tags = soup.find_all('script', src=True)

# Extract JavaScript file URLs and download them
for tag in script_tags:
    js_url = urljoin(page_url, tag['src'])
    download_js_file(js_url, js_dir)

# Extract image URLs and download them
img_tags = soup.find_all('img', src=True)
for tag in img_tags:
    img_url = urljoin(page_url, tag['src'])
    download_img_file(img_url, img_dir)
