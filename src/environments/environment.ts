// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDmo6AiE_vJnpP4RJwwRHEGRKK9_Hq-yrY',
    authDomain: 'iq-bloodbank.firebaseapp.com',
    databaseURL: 'https://iq-bloodbank.firebaseio.com',
    projectId: 'iq-bloodbank',
    storageBucket: 'iq-bloodbank.appspot.com',
    messagingSenderId: '349200844324'
  }
};
