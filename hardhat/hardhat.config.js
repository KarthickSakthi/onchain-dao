require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks:{
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com", // mumbai RPC endpoint
      chainId: 80001, // mumbai chain ID
      accounts: [""],
    }
  },
  etherscan:{
    apiKey: ""
  }
};