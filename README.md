# Sample Dapp

## Instructions

1. `yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers`

2. `npx hardhat` to initialize the smart contract

   <img width="982" alt="init-smart-contract" src="https://user-images.githubusercontent.com/7993238/120114566-5de60200-c188-11eb-8f27-2db46f74b22f.png">

3. `npx hardhat compile` to compile the Greeter.sol and create the smart contract
4. We will use abi(application binary interface) inside of `src/artifacts/contracts/Greeter.sol/Greeter.json`
   We are going to be importing this to our frontend app to interact with the smart contract

5. `npx hardhat node` to run a local test network
   to deploy this smart contract inside our local blockchain, it will give us 20 accounts to work with

6. `npx hardhat run scripts/deploy.js --network localhost` is going to deploy smart contract to the local test network. It will give the address of the deployed smart contract at the end
   <img width="982" alt="deploy-smart-contract-local" src="https://user-images.githubusercontent.com/7993238/120114517-2bd4a000-c188-11eb-9cae-4303e28b8491.png">

7. You need to install metamask as an extension to the browser
8. Connect to localhost 8545 instead of Ethereum Mainnet

<img width="1678" alt="connect-to-local-node" src="https://user-images.githubusercontent.com/7993238/120114726-33487900-c189-11eb-904f-351690c58897.png">

10. Import the first test account that is created by running `npx hardhat node`

<img width="1679" alt="import-test-account" src="https://user-images.githubusercontent.com/7993238/120114746-478c7600-c189-11eb-8372-e84d534c27d2.png">

11. As a result you will see (10.00 ETH - smart contract gas fee) amount of Tets Ethereum in your metamask

<img width="362" alt="our-imported-local-account" src="https://user-images.githubusercontent.com/7993238/120114812-90442f00-c189-11eb-8d5e-9507f6788006.png">
