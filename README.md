Compleete-stucco

## Landing page

#### Git workflow

1. Push your changes into `upstream/[branch name]`
2. Create Merge Request from `upstream/[branch name]` to `upstream/develop`

##### **Before you create MR, be sure you have pulled latest code from `upstream/develop` and `upstream/master`.**


## Development server

Run `npm run start` for a dev server. The app will automatically reload if you change any of the source files.

Then run `npm run start`.



## Deploy process

The `production deploy` job is manual in our CI/CD process. In case of planned deploy follow `these steps:

1. Create Merge Request from `upstream/to-develop` (stage environment) to `upstream/master`.
2. Merge
3. Run manual deploy
