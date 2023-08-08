import requests
from bs4 import BeautifulSoup
import json


courseInfo = {
    "classicalMechanicsMIT": {
        "tableOfContents": {},
    }
}

URL = "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/"
page = requests.get(URL)


soup = BeautifulSoup(page.content, "html.parser")
# print(soup.prettify())

results = soup.find(id="course-content-section")
# print(results.prettify())

parent = soup.find(id="course-content-section").findAll("ul")
# print(parent[1]) #<ul>all<li>'s....</ul>

# # finding all <li> tags
text = list(parent[1].descendants)
# print(text)

# printing the content in <li> tag
# for i in range(3, len(text), 4):
#     print(text[i], end="\n")
#     weekandTitle = (text[i].text.strip())
#     weekandTitleSplit = weekandTitle.split(': ')
#     week = weekandTitleSplit[0]
#     title = weekandTitleSplit[1]
#     # print(week, title)
#     courseInfo["classicalMechanicsMIT"]["tableOfContents"][week] = title


# updated_json = json.dumps(courseInfo, indent=4)
# print(updated_json)
