# Application Development Guide

## Directory Structure

```
src
├── server
│   └── apis
├── assets
├── components
│   ├── common
│   └── main
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
│       └── vueApp.js
```

### ```src/assets```
Add the assets you use within the application here.

```
├── assets
│   └── logo.png
```

### ```src/components```
create vue components inside this directory.

```
├── components
│   ├── common
│   └── main
│       └── App.vue
```

* **Common** : The one that are reused among different components.
* **main** : The one that are unique and not reused.

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

### ```src/appConfig.js```
It exports values a kind of config the application may need like environment variables etc. It can export values that are specified by the server etc.
Thus making all related values stored in one place they can be reflected whereever used. This file is also used by ```vue.config.js```.

### ```src/main.js```
It creates the vue application.

## Refering to src directory within components

* Example: for quick assets etc. references
    ```js
    import SampleRajat from "@/assets/sample-r.jpg";
    ```
* Example: for quick stylesheets references
    ```scss
    <style lang="scss">
    @use "@/styles/variables";

    .AppSide {
        width: variables.$app-side-width;
    }
    </style>
    ```

## Component Tree

Below is the tree diagram generated using **VS Code Extension: aprilandjan.ascii-tree-generator** from the structure mentioned in the file [components.txt](components.txt). Learn more about what a specific component does [here](components.md).

```
App
├── AppNavbar
├── AppMain
│   ├── AppContent
│   │   └── Slider
│   │       └── SliderElement
│   │           ├── VideoScreen
│   │           │   ├── RTCUsersVideo
│   │           │   │   ├── RTCUserVideo
│   │           │   │   └── UserVideo
│   │           │   └── UserVideo
│   │           └── RemoteHosts
│   │               ├── RTCHosts
│   │               │   └── RTCHost
│   │               └── Audience
│   │                   └── AudienceHost
│   └── AppSide
│       └── CommentArea
│           ├── Comment
│           │   └── NormalComment
│           │       └── Avatar
│           └── CommentControls
│               └── Avatar
├── AppFooter
│   └── ActionBar
│       ├── ActionBarGeneralControls
│       │   └── ActionBarCommonControl
│       ├── ActionBarHostControls
│       │   └── ActionBarCommonControl
│       └── ActionBarAudienceControls
│           └── ActionBarCommonControl
└── BecomeHostMessage
```

## SVG as components

If you want to reuse svgs for example as an icon consider creating it as component. For example currently icon components are created under ```components/common/Icons```

```
components
├── common
│   ├── Icons
│   │   ├── ArrowIcon.vue
│   │   ├── ChatIcon.vue
```

## Side toggle and sliding mechanism

[See here](side-toggle-and-sliding.md)