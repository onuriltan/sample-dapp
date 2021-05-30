//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Greeter {
    string greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    // public means that function can be read outside of the smart contract
    // for instance from our frontend react application

    // view means we are not modifying any state, we are not writing anything to blockchain
    // but we are reading from blockchain
    function greet() public view returns (string memory) {
        return greeting;
    }

    // updates the value of  greeting to be what is passed in from the arguments
    // if someone needs to invoke that they need to pay a gas  for this function to be run/written
    // it will be used by metamask, we are going to be using the ether that is created for us by hardhat in our local env
    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
