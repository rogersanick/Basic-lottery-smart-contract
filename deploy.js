const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
require('dotenv').config();
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  process.env.mnemonic
);