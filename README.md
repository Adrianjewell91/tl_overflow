# Translate Overflow

[Live Link](https://pure-crag-76247.herokuapp.com)

[How We Built It](#tutorial)

## Background

Translate Overflow is a web application that harnesses the power of the internet community to provide a translation service where real people offer annotations and revisions to translation requests uploaded by users for FREE.   

The application provides a solution for the translation of larger paragraphs and documents such as legal documents, medical records and essays by a community of translation experts.

## Features
1. [Fully Functional Django Backend and React-Redux Frontend.](#django)

2. [Full Authentication using Django Login, Logout and Authentication.](#auth)

3. [Document and Translation Creation Using Yandex Translate API.](#translate)

4. [React-Slick Carousel View Page for Revisions.](#carousel)

5. [RESTful Api:](#api)

6. [Nested Backend Routes.](#nest)

7. [Material Design-Inspired UI](#ui)

8. [Custom-configured Heroku Hosting](#heroku)

## Discussion of Features

### <a name="django"></a>Fully Functional Django Backend and React-Redux Frontend.
The backend of Translate Overflow is Django v. 1.11.6, and React v. 16.

### <a name="auth"></a>Full Authentication using Django Login, Logout and Authentication.
Translate Overflow’s user authentication logs the user into the application on both the frontend and the backend. Users can only create documents and revisions when they are logged in.

### <a name="translate"></a>Document and Translation Creation Using Yandex Translate API.
When users create a new document on Translate Overflow, a Post request with `axios` will be fired to the Yandex Translate API, then data from the API response is used to create a Translation of the document.

### <a name="carousel"></a>React-Slick Carousel View Page for Revisions.
An interactive react component we felt perfect for rendering the documents and translations.  The tiles of the carousel were styled to look like lifted pages for a real “paper-like” look.  The 1st page is always the original language text followed by the machine translation and subsequent revisions by users.

<img height="500px" src="https://github.com/Adrianjewell91/tl_overflow/blob/start-readme/docs/screenshot.png"/>

### <a name="api"></a>RESTful Routes
Django-Rest-Framework is the package that enables REST api.  Translate-Overflow users restful routes for managing Documents.

### <a name="nest"></a>Nested Backend Routes.
Users can access nested resources with the following Url pattern: `documents/:id/translations/:id`. To do this, Translate Overflow uses the drf-nested-routers package, which provides routers and fields to create nested resources in the Django Rest Framework.

### <a name="ui"></a>Material Design-Inspired UI
Utilized Google’s Material Design for the site’s layout.  The color scheme was chosen with a Material design color palette generator at https://www.materialpalette.com/deep-purple/light-blue.  Sharp contrasts and box shawdowing gave our interactive components the appearance of lifting off the page, in keeping with Material Design’s principles, delivering a simple, smooth and engaging user experience.

### <a name="heroku"></a>Custom-configured Heroku Hosting
Translate Overflow is hosted on Heroic in a special way. A heroic provided-configuration file is provided for public use by Heroku. We modified file `settings.py` so that Django looks in the Build file-directory for frontend assets (a.k.a. the Javascript files the comprise the React frontend).  Then, we disabled Heroku’s `collect static` to prevent Heroku from looking elsewhere.

## Discussion of Challenges

### Implemented React Carousel.  
The structuring of the divs in the page container and its styling proved very challenging.  The carousel would break without a very specific CSS setup.

### Authentication

Django provides built in authentication. The Challenge is accessing this feature through the frontend. Use `authenticate()` and `login()` with information parsed from `axios` requests.

## Future Implementation Plans

1. Comments and Tags
2. User Profiles
3. Edit Option

### <a name="tutorial"></a>How we Built Translate Overflow

  How We Built Translate Overflow.

1. Understand that you always must activate a virtual environment. Install the package(I forgot how), and always start before working with your project in python
2. Do the Getting Started with Django on the Django Documentation. User the newest version of python (probably 3.6.2), and create your app like this:
	    1. “cd your_file”
	    2. “virtualenv env”. #creates the virtual environment.
	    3. “source env/bin/activate”  #activate virtual env.
	    4. Then do the Django create app instructions.

	1.5. Do the “Getting Started with Django” Tutorial on Heroic.
3. Download and start your Django App with the Heroic Django Template.
4. Follow tutorials 1-5 in the Django REST Framework tutorial.
5. Build a React App on top of your app using this tutorial: https://www.techiediaries.com/create-react-app-django/

6. Pay attention to the `settings.py` configuration (change the “try:” line in your view to this line: with open(os.path.join('frontend', 'build', 'index.html')).

7. Build User auth using this tutorial: https://iheanyi.com/journal/user-registration-authentication-with-django-django-rest-framework-react-and-redux/. Then read our auth code to see how we changed it.

	You may want to look at this one too:https://simpleisbetterthancomplex.com/tutorial/2017/02/18/how-to-create-user-sign-up-view.html Then read our code.

8. Build nested routes with this tutorial: https://github.com/alanjds/drf-nested-routers
9.  When you decide to push to heroku, disable COLLECTSTATIC using “heroku config:set DISABLE_COLLECTSTATIC=1”, and un-ignore your build file in the create-react-app build settings by deleting the line in the .gitignore.

10. You need to make sure that your app, when uploaded on Heroku, uses your build files instead of the static files that python creates using collect static. This is really important.

11. Build out regular redux cycles.
