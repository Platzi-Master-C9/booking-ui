# Booking UI
This monorepo will hold all the packages for the frontend teams.


## Structure



[![Open in VSCode](https://img.shields.io/badge/Open%20in-VSCode%20Web-blue?style=for-the-badge)](https://github.dev/Platzi-Master-C9/booking-ui)


```
.
├── apps
│   ├── booking-app   (nextjs)
└── packages
    ├── shared
    ├── geolocation
    ├── messaging-system
    ├── search-engine
    └── ...others parts of booking-ui

```


## Step by step [How to add new package]

Define each of the UI components to be attached with the following command

`lerna create @booking-ui/[your-package-name]`.

### Then
you need to share your package to `shared` package

`lerna add @booking-ui/[your-package-name] --scope=@booking-ui/shared`.


### Example

`lerna create @booking-ui/search-engine`

`Output:`

```
lerna create @booking-ui/search-engine
lerna notice cli v3.22.1
lerna info versioning independent
package name: (@booking-ui/search-engine)
version: (1.0.0)
description: This is the default template that lerna configures.
keywords:
home page: (https://github.com/Platzi-Master-c9/frontend-services/tree/master/packages/search-engine#readme)
license: (ISC)
entry point: (lib/search-engine) lib/index.js
git repository: (https://github.com/Platzi-Master-C9/frontend-services.git) |
```

## How to render your package into Next.js Booking-app
You must add your package name into `const withTM ` to render it

```
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@booking-ui/shared",
  "@booking-ui/search-engine", <--------- add your package
  "@booking-ui/messaging-system",
  "@booking-ui/geolocation"
]);
module.exports = withPlugins([withTM()], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});

```

## Folder overview

<details>
<summary>Detailed folder structure</summary>

```
.
├── apps
│   └── booking-app              (NextJS)
│       ├── public/
│       │   └── shared-assets/   (symlink to global static/assets)
│       ├── src/
│       ├── jest.config.js
│       ├── next.config.js
│       ├── package.json         (define package workspace)
│       └── tsconfig.json        (define path to packages)
├── packages
│   ├── geolocation
│   │   ├── src/
│   │   │    ├── components/
│   │   │    ├── templates/
│   │   │    └── assets/
│   │   ├── package.json
│   │   └── index.js
│   │
│   ├── messaging-system
│   │   │    ├── components/
│   │   │    ├── templates/
│   │   │    └── assets/
│   │   ├── package.json
│   │   └── index.js
│   │
│   │
│   ├── search-engine
│   │   │    ├── components/
│   │   │    ├── templates/
│   │   │    └── assets/
│   │   ├── package.json
│   │   └── index.js
│   │
│   │
│   │
│   └── shared  (It will contain all component exports to the app.)
│       ├── src/
│       ├── package.json (It will contain as a dependency
│       │                 each one of the packages to export)
│       └── index.js
│
├── .npmrc
├── dotenv.config.js
├── lerna.json
├── yarn.lock
└── package.json
```

</details>





# Monorepo scripts



| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn bootstrap`           | install all dependencies and start symlinks                                                                                                                      |
| `yarn start ` | run all packages in paralel                                                         |
| `yarn start:app ` | run server                                                               |
| `yarn build:app`    |                                                                                  |
| `yarn run:build:app`                | Built-in                                                                             |

