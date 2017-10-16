# Translate Overflow

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
When users create a new document on Translate Overflow, a Post request would be fired to the Yandex Translate API, then data from the API response is used to create a Translation of the document.

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


## Future Implementation Plans

1. Comments and Tags
2. User Profiles
3. Edit Option
