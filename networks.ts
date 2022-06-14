import { NetworksUserConfig } from "hardhat/types";
import dotenv from 'dotenv';

dotenv.config();

const networks: NetworksUserConfig = {};

if (process.env.PRIVATE_KEY) {
  // https://hardhat.org/hardhat-network/guides/mainnet-forking
  networks.hardhat = {
    // forking: {
    //   url: process.env.ALCHEMY_POLYGON_RPC_URL,
    //   blockNumber: 28583600,
    // }
  }
  networks.rinkeby = {
    url: process.env.RINKEBY_RPC,
    accounts: [process.env.PRIVATE_KEY]
  };
}

export default networks;