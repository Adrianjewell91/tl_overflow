# Translate Overflow

## Background and Overview

Background

Online language translation services, such as Google Translate or Babylon, have been around for years.  They’ve made incredible advances in the last few years with the goal of having machines provide an instant and yet totally “human” like translation.  However, these services, while amazing, still fall remarkably short in the translation of a larger paragraph or whole document due to the nuances and complexity of cross language, cross culture human communication. Below is an example of a translation using Google Translate from Chinese(Simplified) to English with problems:

<img height="500px"  src="https://github.com/Adrianjewell91/translate_overflow/blob/master/docs/Translation_Fail.png"/>
The only other option is to pay for a expensive translation service.  Our team found this present stage of affairs to be unsatisfactory:

ENTER TRANSLATE OVERFLOW

Translate Overflow is a web application that harnesses the power of the internet community to provide a translation service where real people offer annotations and revisions to translation requests uploaded by users for FREE.   

The application provides a solution for the translation of larger paragraphs and documents such as legal documents, medical records and essays by a community of translation experts.

## Functionality and MVP

Project Name - Translate Overflow

Description - A service where users can upload a document and request revisions of machine translation.

Features / Core Functionality

### Users

1. Users post a translation or a revision.
2. A translation is when a user posts a document and receives a machine translation.
3. A Revision is when a user edits the machine translation and a new revised post is appended to a list of revisions.
4. Users can comment on translations and revisions.
5. Users can upvote revisions.
6. Users can upvote other users.
7. Users can select tags for revisions. Only a revision's author can select the tags.
8. Users can search for translations.  

### Translation

1. Original Post
	1. Is submitted by users and receives immediate machine translation.
	2. Saves to a index of the user's submitted translations.
	3. Language Category tag will be set upon submitting the translation. i.e "English to Spanish".
	4. Machine Translation comes from an api.
2. Revisions
	1. Created by a user from a machine translation or previous revision.
	2. Can receive tags, upvote & comments.

### Tags

1. Attached to revisions for categorizing.
2. Selected from a list of options provided:
	 Sample list
  	1. Business
  	2. Colloquial
  	3. Academic
  	4. Legal
  	5. Regional
  	6. Medical
  	7. Technical
3. Can be used for searching and filtering.

### Comments

1. Are created by users.
2. Comments are made on machine translation or revisions.

## Technologies and Technical Challenges

Backend: Django

Frontend: React/Redux

One of the first challenges is setting up React on top of Django. Django uses RestAPI framework to interact with React. It also requires a customized authentication configuration. For this project, token authentication will be the protocol choice.

Deploying Django will be another challenge. Currently, team members have built a production-level proof of concept locally, but not hosted. Django does not come pre-configured "out of the box", so the plan is to follow the documentation on Heroku.

Interacting with Translate API is the third challenge. When a document is uploaded, the application will have to make a request to a translator API and create a new document with the response data. The frontend will make a request, then, as part of the promise, will make a Post request to the Django backend.

Integrating some React libraries will be the fourth challenge. The libraries Quill and Slick will make interacting with documents an easy process. Slick provides carousel display and Quill provides text editing.


## Accomplished over the weekend.

Over the weekend, team members learned the Django Rest framework and put a React page on top of the Django framework. To do this, members completed part I to III of the tutorial of the Django Documents. Additionally, members completed the part I to IV of the Django Rest framework tutorial. These tutorials cover setting up a basic Django backend and adding Restful APIs. They also cover the Django browserable APIs and basic authentication. At the time of writing this, team members also plan to complete the token authentication tutorial in conjunction with the HackerNoon React/Django tutorial.


## Groups and Work Breakdown

Team: Chris (Junhang) Guan, Porfirio Matias, Adrian Jewell

1. Sunday:
  1. Prepare proposal. (Team)
  2. Get proof-of-concept app hosted on Heroku. (Team), get started on Monday.

2. Monday:
  1. Porfy will learn token auth and implement it on the proof-of-concept app.
  2. Chris and Adrian will begin setting up Document CRUD on translate_overflow.

3. Tuesday:
  1. Chris and Adrian will build out react components for Document CRUD.
  2. Porfy will build components for auth, and at the appropriate time, apply auth functionality to document crud (applying properties to Document objects, and adding login/logout components, protecting routes).

4. Wednesday:
  1. Finish applying Token Auth to Document CRUD as a team.
  2. Implement API translation. (Translation)

  At this point, Translate Overflow will have full document crud (Create, Read, Update, Delete), along with the following components, and full auth:
    1. Index of originals.
    2. Show Index.
    3. Show.
    4. New Revisions.
    5. New Original.

5. Thursday:
  1. Seed Data. (Everyone)
  2. Search and Upvotes. (Adrian and Chris, Porfy)

6. Friday:
  1. Comments. (Adrian)
  2. Styling. (Porfy Chris)
  3. Bad User Testing. (Team)

7. Saturday:
  1. Styling Components (Finishing Touches).
  2. Bad User Testing. (Team)

8. Sunday:
  1. Outreach to family and reddit. (Team)
  2. Write Production README. (Team)

9. Monday: Turn in via Jobberwocky.

## Plan to Get New Users

1. Team members will share with friends and family.

2. A subreddit post will showcase the app. Team members will also post the app in ten other r/translation forums (or where applicable).
