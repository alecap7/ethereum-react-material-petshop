# ethereum-react-material

A Drizzle + React + Material UI [**Petshop**](https://github.com/truffle-box/pet-shop-box) PoC implementation.

## Features

- Ethereum interaction is completely achieved through the drizzle redux store.
- UI is implemented by combining react and the material design.

## Installation and usage

> This repo has been tested on [Node.js](https://nodejs.org/) v11.15.0 (Ubuntu). It currently fails on node versions >= 12.

If you are using [nvm](https://github.com/nvm-sh/nvm), type:

```sh
$ nvm use 11
```

Otherwise make sure you are using Node.js _v11.15.0_.

#### Ethereum app setup

```sh
$ truffle develop
$ truffle(develop)> migrate
```

Or, if you are using ganache-cli:

```sh
$ ganache-cli -p 9545
$ truffle migrate
```

Your blockchain is now up and running!

#### React client setup

> Note: the React frontend application in under the client folder

```sh
$ cd client
$ yarn
$ yarn start
```

You are ready to test!
