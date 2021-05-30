# Sample Dapp

1. `yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers`
2. `npx hardhat` to initialize the smart contract
3. `npx hardhat compile` to compile the Greeter.sol and create the smart contract
4. We will use abi(application binary interface) inside of `src/artifacts/contracts/Greeter.sol/Greeter.json`
   We are going to be importing this to our frontend app to interact with the smart contract

5. `npx hardhat node` to run a local test network
   to deploy this smart contract inside our local blockchain, it will give us 20 accounts to work with

6. `npx hardhat run scripts/deploy.js --network localhost` is going to deploy smart contract to the local test network. It will
   give the address of the deployed smart contract at the end

7.
