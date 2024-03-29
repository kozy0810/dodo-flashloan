// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.9;

interface IDODOV1Helper {
    function querySellQuoteToken(address dodoV1Pool, uint256 quoteAmount)
        external
        view
        returns (uint256 receivedBaseAmount);

    function querySellBaseToken(address dodoV1Pool, uint256 baseAmount)
        external
        view
        returns (uint256 receivedQuoteAmount);
}