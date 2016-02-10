# Add React (stage3.md)
## Add React components using Meteor
***Additional Packages other than those created by Meteor as defaults***

    meteor add react
    meteor add kadira:flow-router
    meteor add kadira:react-layout
    meteor add fourseven:scss
    meteor add reywood:bootstrap3-sass
    meteor add accounts-password

## Structure Application
***Simple Structure***

See also [Structuring Your Application](http://docs.meteor.com/#/full/structuringyourapp "Meteor: Structuring Your Application")

    vrls-demo\app\client
    vrls-demo\app\lib
    vrls-demo\app\server
    vrls-demo\app\client\components
    vrls-demo\app\client\stylesheets
    vrls-demo\app\client\components\layout
    vrls-demo\app\client\components\users

### Create `head.html`
***Head Tag: Page Title, etc***

    app\client\head.html

### Create `main.scss`
***Stylsheet using Bootstrap***

    app\client\stylesheets\main.scss

*This will import the reywood package*

	//noinspection CssUnknownTarget
	@import '{reywood:bootstrap3-sass}/bootstrap';

### Create `_variables.scss`
***Base variables***

    app\client\stylesheets\_variables.scss

### Create `_bootswatch.scss`
***Dark Theme for Bootstrap***

    app\client\stylesheets\_bootswatch.scss

### Update `main.scss`
***Order is important***

	@import 'variables';
	//noinspection CssUnknownTarget
	@import '{reywood:bootstrap3-sass}/bootstrap';
	@import 'bootswatch';

## Add `routes.jsx`
***Routes for Home, Login, Register, Account Created, User Profile. Uses ReactLayout - `kadira:react-layout`***

    app\lib\routes.jsx



## Add `Home.jsx`
***Basic Display***

    app\client\components\Home.jsx

## Add `MainLayout.jsx`
***Page Structure: header, content, footer***

    app\client\components\layout\MainLayout.jsx

## Add `Header.jsx`
***Global Navigation***

    app\client\components\layout\Header.jsx

## Add `Footer.jsx`
***Footer Info/Navigation***

    app\client\components\layout\Footer.jsx

## Add User Components
***AccountCreated,Login,Profile,Register***

    app\client\components\users\UserAccountCreated.jsx
    app\client\components\users\UserLogin.jsx
    app\client\components\users\UserProfile.jsx
    app\client\components\users\UserRegister.jsx