## in order to run this application in your local machine

- open todo folder
- open terminal in this location
- run`yarn` or `npm install` command
- if all commands ran successfully without any error run `yarn start` command in this location.

### hosted url - https://shortly-20dcf.web.app/

#### Steps To build and host

- in shortly directory run `npm run build` command.
- this will create latest build inside `build` folder.
- login to firebase using proper credentials using `firebase login` command.
- run `firebase init` command if initialization is not done and select `shortly` project for hosting.
- set `build` folder to deploy.
- run `firebase deploy` command. It will deploy the build and website will be hosted.
