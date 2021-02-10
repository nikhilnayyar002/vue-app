# Application Development Guide

## Directory Structure

```
src
├── server
│   └── apis
├── assets
├── components
├── data
├── lib
├── store
├── styles
├── appConfig.js
└── main.js
```

### ```src/server/apis```
Add your fetch, axios etc apis here and provide it to the vuex components etc as functions.

```
├── server
│   └── apis
│       └── videoConference.js
```

### ```src/assets```
Add the assets you use within the application here.

```
├── assets
│   └── logo.png
```

### ```src/components```
create vue components inside this directory.

### ```src/data```
Store data needed by components etc.

```
├── data
│   ├── appRoutes.js
│   ├── endpoints.js
│   └── globals.js
```

* ```globals.js``` contains const data and functions that are used by your components etc.
* ```appRoutes.js``` contains app routes used within your applications. Idea is to store the routes at one place so that any change is automatically applied anywhere within the app.
* ```appRoutes.js``` contains server endpoints used within your applications. Idea is to store the routes at one place so that any change is automatically applied anywhere within the app.

### ```src/lib```
Add code that is not application specific but helps application to work. This code is reusable among multiple applications. We can call it library or helpers.

```
├── lib
│   ├── http.js
│   └── common.js
```

### ```src/store```
Config your application store here.

```
├── store
│   ├── actions.js
│   ├── index.js
│   ├── mutations.js
│   └── mutationTypes.js
```

### ```src/styles```
Add global level styling to your application. Here you config/custom theme and set root level css. Read more about this here [Styling](styling.md).


