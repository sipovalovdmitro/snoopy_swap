// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SnoopySwap is Context {
    IUniswapV2Router02 public uniswapV2Router;
    IERC20 public snoopy;

    constructor() {
        uniswapV2Router = IUniswapV2Router02(
            0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
        );
        snoopy = IERC20(0x6ce3E45e73aE1Effa3CC8aE2F1620F4A18258391);
    }

    function swapTokensForEth(uint256 tokenAmount) public {
        address[] memory path = new address[](2);
        path[0] = address(snoopy);
        path[1] = uniswapV2Router.WETH();
        uint[] memory amountsOut = uniswapV2Router.getAmountsOut(
            tokenAmount,
            path
        );
        uniswapV2Router.swapExactTokensForETH(
            tokenAmount,
            amountsOut[1],
            path,
            _msgSender(),
            block.timestamp
        );
    }
}
