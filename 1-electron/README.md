# Electron NFC Reader

### Prerequisites

### Set-up

I advise to use a supported Node.js version using [`nvm`](https://github.com/nvm-sh/nvm/blob/master/README.md).

> Indeed, you must have a Node.js version that supports native package post-install processes using `node-gyp`.
>
> - It is not yet supported on Node.js v12.0.0 and later, see [here](https://github.com/nodejs/node-gyp/issues/1874)
> - Tested using Node.js v10.17.0

There is a `.nvmrc` at the root of this project to help you use the supported v10.17.0, doing the following:

- [Install `nvm`](https://github.com/nvm-sh/nvm/blob/master/README.md#installation-and-update)
- Install Node.js v10.17.0 if you don't already have it
  ```bash
  $ nvm install
  ```
- Use this Node.js version
  ```bash
  $ nvm use
  ```

> Do not forget to come back to your favourite Node.js version when leaving this project
>
> ```bash
> # List installed Node.js version
> $ nvm ls
> # Use your favourite one
> $ nvm use <your_node_version>
> ```

### Run locally

- First of all, you need to install the project's dependencies:
  ```bash
  $ yarn install
  ```
- Then, you need to [recompile Node.js native modules](https://nodejs.org/api/addons.html). Indeed, this library uses the [`nfc-pcsc` library](https://github.com/pokusew/nfc-pcsc) Node Native Module (and its underlying library [`node-pcsclite`](https://github.com/pokusew/node-pcsclite) which provides access to PC/SC API).
  See [here](https://electronjs.org/docs/tutorial/using-native-node-modules) to understand how to use native modules in Electron.

  > Have a look at the `nfc-pcsc` library FAQ [here](https://electronjs.org/docs/tutorial/using-native-node-modules) to better understand the why we need to build the app on the target platforms when using native node modules.

  To rebuild the native modules for your platform, run:

  ```bash
  $ yarn build
  ```

- Finally, you can run the application locally:
  ```bash
  $ yarn start
  ```
