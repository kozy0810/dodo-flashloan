// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../interfaces/IFlashloan.sol";
import "hardhat/console.sol";

abstract contract FlashloanValidation {
    uint256 constant MAX_PROTOCOL = 8;

    modifier checkTotalRoutePart(IFlashloan.Route[] memory routes) {
        console.log("totalPart", routes[0].part);
        uint16 totalPart = 0;
        for (uint256 i = 0; i < uint256(routes.length); i++) {
            totalPart += routes[i].part;
        }
        console.log("totalPart", totalPart);
        require(totalPart == 10000, "Route part error");
        _;
    }
}