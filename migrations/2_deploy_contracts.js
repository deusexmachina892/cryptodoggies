var CryptoDoggies = artifacts.require("./CryptoDoggies.sol");

module.exports = function(deployer, accounts) {
  deployer.deploy(CryptoDoggies);
};
