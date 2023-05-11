require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks");

/** @type import('hardhat/config').HardhatUserConfig */

const mnemonic = process.env.MNEMONIC;
module.exports = {
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      gas: 2100000,
      forking: {
        url: "https://mainnet.infura.io/v3/1318c38c0a814d1fb072fc3d4b0002ce",
        // blockNumber: 16823611,
      }
    },
    mainnet: {
      accounts: {
        count: 10,
        mnemonic,
        path: "m/44'/60'/0'/0",
      },
      url: "https://mainnet.infura.io/v3/1318c38c0a814d1fb072fc3d4b0002ce",
    },
    goerli: {
      accounts: {
        count: 10,
        mnemonic,
        path: "m/44'/60'/0'/0",
      },
      url: "https://goerli.infura.io/v3/1318c38c0a814d1fb072fc3d4b0002ce",
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    token: 'ETH',
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
};
