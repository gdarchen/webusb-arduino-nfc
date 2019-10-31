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
