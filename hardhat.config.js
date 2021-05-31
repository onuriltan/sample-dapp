require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts', // specifies where the build files will go with `npx hardhart compile` 
  },
  networks: {
    hardhat: {
      chainId: 1337 // ETH Testntet
    }, 
    ropsten: {
      url: 'https://ropsten.infura.io/v3/b2ccfa6c01214dcbaa23bcc2efee2840',
      accounts: [`0x${process.env.ACCOUNT_PRIVATE_KEY}`]
    }
  }
};

