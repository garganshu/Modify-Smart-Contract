require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.TEST_ALCHEMY_URL , 
      accounts: [process.env.TEST_PRIVATE_KEY]
    }
  }
};
