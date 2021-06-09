//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Token {
    string public name = "Onur Token";
    string public symbol = "ONR";
    uint256 public totalSupply = 10000000;
    mapping(address => uint256) balances;

    // msg.sender is auto available in the context of the contract
    // msg.sender = add ress of the person who deployed this contract
    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) external {
        // if sender does not have the amount he/she wants to send, do not allow
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // if there is enough balance, subtract the amount from balance of the sender
        balances[msg.sender] -= amount;

        // transfer the amount to the person who is the receiver
        balances[to] += amount;
    }

    // returns the balance of ONR tokens inside the address that is passed as an arg
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
