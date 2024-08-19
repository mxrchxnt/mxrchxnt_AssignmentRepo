// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStore {
    string public message;

    function Store(string memory mseg)public {
        // takes input from user and store's in the message variable
        message = mseg;
    }
    function getMessage()public view returns(string memory) {
        // returns the message stored in message variable
        return  message;
    }
}
