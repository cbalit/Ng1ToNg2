# Ng1ToNg2

Simple set of exercises to learn the differents steps to migrate an angular 1 application to angular 2

## Run the project


#### Prerequisite

```
$ npm i -g grunt-cli bower
$ npm i
$ bower install
```


#### Commands

* Run the app: **npm start**


## Steps

### Step 1 - Follow Angular Style Guide

Files are split according to functionality (controllers, filters...)
* You must split the code in feature
* you must use the controllerAs syntax


### Step 2 - Use TypeScript and ES6

All the code is in js files.
* Use a module loader
* Use ES6 syntax for import and export
* Use TypeScript files
* Use the class syntax for your controller and service



### Step 3 - My first upgrade
Angular 2 scripts are loaded in your page
* replace $http by Angular 2 Http service
* use upgradeAdapter to load HTTP-PROVIDER
* use upgradeAdapter.downgradeNg2Provider to make this service available in Angular 1 world



### Step 4 - And my controller become a component
* use the new Angular 2 template syntax
* create the a component to replace list controller
* UpgradeAdapter.downgradeNg2Component will allow to use this component as directive in Angular1 world
* limit the route definition to a single template property using this directive


### Step 5 - Filter To pipe
2 pipes have been add to act as filter and orderBy filters
* create a Angular 2 pipe to replace the star filter


### Step 6 - A new component with form validation

* Same as step-4 use a new component for Edition (component, template and route)
* inject $location and $routeParams with upgradeAdapter.upgradeNg1Provider
* add form validation data in your html template


### Step 7 - Add angular 2 router

* import router directives and providers
* create an app component with your routes configuration
* use RouteParams service
* user router navigate method


