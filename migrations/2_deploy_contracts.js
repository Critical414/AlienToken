var Metadata = artifacts.require("./Metadata.sol");
var AlienToken = artifacts.require("./AlienToken.sol");

let _ = '        '

module.exports = (deployer, helper, accounts) => {

  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata)
      let metadata = await Metadata.deployed()
      console.log(_ + 'Metadata deployed at: ' + metadata.address)

     // Deploy AlienToken.sol
      await deployer.deploy(AlienToken, 'AlienToken', 'ALI', metadata.address)
      let token = await AlienToken.deployed()
      console.log(_ + 'Alien deployed at: ' + token.address)

    } catch (error) {
      console.log(error)
    }
  })
}
