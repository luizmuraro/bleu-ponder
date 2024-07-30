import { createConfig } from "@ponder/core";
import { http } from "viem";

import { BalancerPoolAbi } from "./abis/BalancerPoolAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_SEPOLIA),
    },
  },
  contracts: {
    BalancerPool: {
      network: 'sepolia',
      abi: BalancerPoolAbi,
      address: "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02",
      startBlock: 6375171,
    },
  },
});
