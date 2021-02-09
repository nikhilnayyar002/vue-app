# Project Configerations

## ```.env```

This file contains project environment variables. This file should be managed by a particular developer and should not be changed very often. 
> Warning: This file is tracked by git and should be pushed to remote rep. It is recommended not to add credentials in this file.

* ```API_BASE``` : This variable sets the base of endpoints. For example if base path is "/api" and login endpoint is "/login", then actual endpoint is "/api/login". Here ```API_BASE``` should be "/api".

* ```VUE_APP_PROD_SERVER``` : The variable requires domain name (including/excluding port value). This variable is used to compose backend server endpoints in production. This variable is used in ```src/appConfig.js```. Example:
    ```
    VUE_APP_PROD_SERVER = http://13.229.197.221:3000    //port
    VUE_APP_PROD_SERVER = www.google.com                //no port
    VUE_APP_PROD_SERVER =                               //no value
    ```
    In the 3rd case we did not specified any value. So it will be assumed that server and client are on the same domain.
    If we have an endpoint say "/api/login", then in production the client will request the endpoint as:
    ```
    http://13.229.197.221:3000/api/login
    www.google.com/api/login
    /api/login
    ```

## ```.env.local```

One can create **.env.local** file in the root. This file is not tracked by git. Currently supported variables are:

* ```VUE_APP_DEV_SERVER``` : The variable requires domain name (including/excluding port value). This variable if defined takes precedence over ```VUE_APP_DEV_SERVER_PORT```. This variable is used in ```src/appConfig.js```. This variable is same as ```VUE_APP_PROD_SERVER```. If present it tells Vue that in development proxy the backend requests from App to this domain address.
* ```VUE_APP_DEV_SERVER_PORT``` : specify local server port. This variable is used in ```src/appConfig.js```. If server is running at localhost at a specific port, one can tell Vue to proxy at this port by setting this variable value.

## ```vue.config.js```

This is configeration file settings for webpack. This can be customized to tweak **vue-cli-service**.

https://cli.vuejs.org/config/

It is currently providing following settings:

* proxying requests in development.

## ```jsconfig.json```

This is created to hide warnings from **Vetur** VS Code extention if that extention is enabled.

https://vuejs.github.io/vetur/guide/FAQ.html#vetur-can-t-find-tsconfig-json-jsconfig-json-in-xxxx-xxxxxx

## ```src/appConfig.js```
This file export application specific configeration values which are constant. Currently it has to be a commonjs module file to be utilized by files such as ```vue.config.js``` which runs under nodejs runtime.