import { NetworksUserConfig } from "hardhat/types";
import dotenv from 'dotenv';
import { env } from "process";

dotenv.config();

const networks: NetworksUserConfig = {};

if (process.env.PRIVATE_KEY) {
  // https://hardhat.org/hardhat-network/guides/mainnet-forking
  networks.hardhat = {
    forking: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.POLYGON_MAINNET_API_KEY}`,
      blockNumber: 28583600,
    }
  }

  networks.mumbai = {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_MUMBAI_API_KEY}`,
    accounts: [process.env.PRIVATE_KEY]
  };

  networks.polygon = {
    url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.POLYGON_MAINNET_API_KEY}`,
    accounts: [process.env.PRIVATE_KEY]
  };
}

export default networks;