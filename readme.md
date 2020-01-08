The project is based on https://github.com/firebase/emulators-codelab which is used by the following Google codelabs.

1. [Getting started with the Firebase Local Emulator Suite](https://google.dev/codelabs/firebase-emulator-get-started?playlist-id=firebase-emulators#0)
2. [Test-drive Firestore Security Rules](https://google.dev/codelabs/firebase-emulator-test-rules#0)
3. [Test-drive Complex Firebase Functions](https://google.dev/codelabs/firebase-emulators-test-functions#0)

## Setup

### Add the following files:

#### .firebaserc

```json
{
  "projects": {
    "default": "your real Firebase Project ID"
  }
}
```

#### functions/firebase-info.js

```js
const PROJECT_ID = "your real Firebase Project ID";
module.exports = {
  PROJECT_ID
};
```

### Terminal

```sh
npm install
cd functions
npm install
```

## Run

- Run emulator:start script in package.json
- Run test - functions script in functions/package.json

## Issues

- [firebase-admin-node](https://github.com/firebase/firebase-admin-node/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
- [firebase-js-sdk](https://github.com/firebase/firebase-js-sdk/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
- [firebase-tools](https://github.com/firebase/firebase-tools/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aopen)
