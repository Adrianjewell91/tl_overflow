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

### <a name="api"></a>RESTful Routes
Django-Rest-Framework is the package that enables REST api.  Translate-Overflow users restful routes for managing Documents.

### <a name="nest"></a>Nested Backend Routes.
Users can access nested resources with the following Url pattern: `documents/:id/translations/:id`. To do this, Translate Overflow uses the drf-nested-routers package, which provides routers and fields to create nested resources in the Django Rest Framework.
### <a name="ui"></a>Material Design-Inspired UI

### <a name="heroku"></a>Custom-configured Heroku Hosting
Translate Overflow is hosted on Heroic in a special way. A heroic provided-configuration file is provided for public use by Heroku. We modified file `settings.py` so that Django looks in the Build file-directory for frontend assets (a.k.a. the Javascript files the comprise the React frontend).  Then, we disabled Heroku’s `collect static` to prevent Heroku from looking elsewhere.

## Discussion of Challenges

## Future Implementation Plans

1. Comments and Tags
2. User Profiles
3. Edit Option
