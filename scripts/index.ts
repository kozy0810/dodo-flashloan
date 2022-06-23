// import { ethers, deployments } from "hardhat";
// import { Flashloan } from "../typechain-types";

// import { dodoV2Pool, erc20Address } from "../constants/addresses";
// import { Flashloan__factory } from "../typechain-types";
// import {
//   findRouterFromProtocol,
//   getBigNumber,
//   getContractFromAddress,
//   getERC20ContractFromAddress,
// } from "../utils";
// import { getErc20Balance } from "../utils/token";


// interface Hop {
//   protocol: number
//   data: string
//   path: Array<string>
// }


// interface Route {
//   part: number
//   hops: Array<Hop>
// }


// interface FlashCallbackData {
//   me: string
//   flashLoanPool: string
//   loanAmount: number
//   routes: Array<Route>
// }


// async function main() {
//   let flashloan: Flashloan;
//   flashloan = await ethers.getContractAt(
//     "Flashloan",
//     "0xa524FFD704A4E33566C230bfcd3567251ca42aD8"
//   ) as Flashloan;

//   // const provider = new ethers.providers.AlchemyProvider(
//   //   "",
//   //   `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_MUMBAI_API_KEY}` as string
//   // )
//   const provider = ethers.getDefaultProvider("http://127.0.0.1:8545/");

//   const signer = new ethers.Wallet(
//     process.env.PRIVATE_KEY as string,
//     provider
//   );

//   const params = {
//     flashLoanPool: dodoV2Pool.WETH_USDC,
//     loanAmount: getBigNumber(1000, 6),
//     firstRoutes: [
//       {
//         hops: [
//           {
//             swaps: [
//               {
//                 // protocol number
//                 protocol: 1,
//                 // trading ratio (100% -> 10000, 1% -> 100)
//                 part: 10000,
//                 // byte data used for swapping
//                 data: ethers.utils.defaultAbiCoder.encode(
//                   ["address"],
//                   [findRouterFromProtocol(1)]
//                 ),
//               },
//             ],
//             path: [erc20Address.USDC, erc20Address.WETH],
//           },
//         ],
//         part: 10000,
//       },
//     ],
//     secondRoutes: [
//       {
//         hops: [
//           {
//             swaps: [
//               {
//                 // UniswapV3
//                 protocol: 0,
//                 part: 10000,
//                 data: ethers.utils.defaultAbiCoder.encode(
//                   ["address", "uint24"],
//                   // 0.05 % => 500 (Input USDC/WETH pool fee)
//                   [findRouterFromProtocol(0), 500]
//                 ),
//               },
//             ],
//             path: [erc20Address.WETH, erc20Address.USDC],
//           },
//         ],
//         part: 10000,
//       },
//     ],
//   }


//   const tx = await flashloan.connect(signer).dodoFlashLoan(
//     params,
//     {
//       gasLimit: 1000000,
//       // refer to https://polygonscan.com/gastracker
//       gasPrice: ethers.utils.parseUnits("60", "gwei"),
//     }
//   );
//   console.log(tx);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });




// // interface Hop {
// //   protocol: number
// //   data: string
// //   path: Array<string>
// // }


// // interface Route {
// //   part: number
// //   hops: Array<Hop>
// // }


// // interface FlashCallbackData {
// //   me: string
// //   flashLoanPool: string
// //   loanAmount: number
// //   routes: Array<Route>
// // }