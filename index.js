import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-goerli.g.alchemy.com/v2/lmr38bBwfCgF2dTpxOAnRnvHi5-BfDWG`
);

const query = async () => {
  const block = await provider.getBlockNumber();
  console.log("block number", block); //8232887

  //balance of an acc
  const balance = await provider.getBalance(
    "0xDB632661B625605D7661073D75c0BC031A60B26C"
  );
  console.log("balance", ethers.utils.formatEther(balance)); //1.396120149117858643
  //to convert into wei
  console.log(
    "balance iin wei",
    ethers.utils.parseEther(ethers.utils.formatEther(balance))
  );
};
query();
