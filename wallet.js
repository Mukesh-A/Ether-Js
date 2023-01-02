// 0xad9683934488deddc1c1c7d2a8a687bfda10edb2
import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-goerli.g.alchemy.com/v2/lmr38bBwfCgF2dTpxOAnRnvHi5-BfDWG`
);
// from remix Sample1.sol
const walletAddress = "0xad9683934488deddc1c1c7d2a8a687bfda10edb2";
const walletABI = [
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contractInteraction = async () => {
  const wallet = new ethers.Contract(walletAddress, walletABI, provider);

  const contractName = await wallet.name();
  console.log("contract name", contractName);

  const num = await wallet.getValue();
  console.log(" num", String(num));

  const contractBalance = await wallet.contractBalance();
  console.log("contractBalance", ethers.utils.formatEther(contractBalance));

  const accountBalance = await wallet.accountBalance(
    "0xDB632661B625605D7661073D75c0BC031A60B26C"
  );
  console.log("accountBalance", ethers.utils.formatEther(accountBalance));
};
contractInteraction();
