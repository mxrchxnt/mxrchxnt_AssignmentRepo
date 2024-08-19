// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonalizedMessage{
    string public message;
    constructor(string memory personalizedmes) {
        // setting personalized message at deployment
        message = personalizedmes;
    }
    function getMessage()public view returns (string memory) {
        // getting personalized message
        return message; 
    }
}
