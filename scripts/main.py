import requests
from bs4 import BeautifulSoup

# URL = "https://realpython.github.io/fake-jobs/"
URL = "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/"
page = requests.get(URL)

# ***The .content attribute holds raw bytes, which can be decoded better than the text representation using the .text attribute.

# print(page.text)
# print(page.content)


soup = BeautifulSoup(page.content, "html.parser")
# print(soup.prettify())

results = soup.find(id="course-content-section")
# print(results.prettify())

parent = soup.find(id="course-content-section").findAll("ul")
# print(parent[1]) #<ul>all<li>'s....</ul>

# # finding all <li> tags
text = list(parent[1].descendants)
# print(text)

# # printing the content in <li> tag
for i in range(2, len(text), 2):
    print(text[i], end="\n")
    print(text[i].text.strip(), end="\n")
    print((text[i])["href"], end="")
    print()
