const path = require("path");
require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const providerWithMnemonic = (mnemonic, rpcEndpoint)=> new HDWalletProvider(mnemonic, rpcEndpoint);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks:{
    development:{
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    testrpc:{
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' 
    },
    ganache:{
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    ropsten:{

    }
  } 
};
