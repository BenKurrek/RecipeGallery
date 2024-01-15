import requests
import re
from bs4 import BeautifulSoup


def get_html(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        return str(e)


def extract_image_url_from_div(raw_image):
    if raw_image:
        style = raw_image.get("style")
        # Regular expression to find the URL in the style attribute
        match = re.search(r"background: url\((.*?)\)", style)
        if match:
            return match.group(1)
    return "No image found"


def divide_quantity_and_preserve_unit(input_str, divisor=3):
    # Regular expression to separate the numeric part from the unit
    match = re.match(r"(\d+\.?\d*)(\D*)", input_str)
    if match:
        quantity = match.group(1)
        unit = match.group(2)

        # Convert quantity to float, divide it, and then round it to 2 decimal places
        new_quantity = round(float(quantity) / divisor, 2)

        # Concatenate the new quantity with the unit
        return f"{new_quantity} - {unit if unit else 'na'}"
    else:
        return "Invalid input"


def parse_ingred(ingred):
    # Clean up newlines and extra spaces
    cleaned = (re.sub(r"[\r\n]+", " ", ingred).strip()).split(maxsplit=1)
    quantity = divide_quantity_and_preserve_unit(cleaned[0])
    name = cleaned[1]
    return f"{name} - {quantity}"


def find_elements(html_content):
    soup = BeautifulSoup(html_content, "html.parser")

    raw_ingredients = soup.find_all("li", class_="ingred")

    ingredients = [
        parse_ingred(ingredient.get_text(strip=True)) for ingredient in raw_ingredients
    ]

    raw_title = soup.find("h1", class_="name-of-dish-size")
    title = raw_title.get_text(strip=True) if raw_title else "No title found"

    raw_subtitle = soup.find("p", class_="dish-explanation")
    subtitle = (
        raw_subtitle.get_text(strip=True) if raw_subtitle else "No subtitle found"
    )

    raw_image = soup.find("div", class_="recipe-single-image")
    image = extract_image_url_from_div(raw_image)

    # Print header
    print("Title\tSubtitle\tImage\tIngredients")
    print(f"{title}\n{subtitle}\n{image}\n")

    # Print recipe info and ingredients
    for ingred in ingredients:
        print(f"{ingred}\t")


if __name__ == "__main__":
    url = input("Enter the URL: ")
    html_content = get_html(url)
    if html_content:
        find_elements(html_content)
