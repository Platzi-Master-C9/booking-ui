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
    ├── messaging-sytem
    ├── search-engine
    └── ...others parts of booking-ui

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
| `yarn start:app ` |                                                                      |
| `yarn build:app`    |                                                                                  |
| `yarn run:build:app`                | Built-in                                                                             |

