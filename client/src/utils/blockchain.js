import { ethers } from "ethers";
import launchpadAbi from "../abis/Launchpad.json"; // Adjust the path if needed

const contractAddress = "0xf2959BAA209158028FF82aa80209C718eF001d13"; // Deployed contract address
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL; // RPC URL (e.g., Infura, Alchemy)

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(rpcUrl);
};

export const getLaunchpadContract = () => {
  const provider = getProvider();
  return new ethers.Contract(contractAddress, launchpadAbi, provider);
};

export const getSignerContract = (signer) => {
  return new ethers.Contract(contractAddress, launchpadAbi, signer);
};
