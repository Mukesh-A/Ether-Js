import { useState, useEffect } from "react";

import "./App.css";
import { Contract, ethers } from "ethers";

function App() {
  const walletAddress = "0xad9683934488deddc1c1c7d2a8a687bfda10edb2";

  useEffect(() => {
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
    const writecontrcat = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const wallet = new ethers.Contract(walletAddress, walletABI, signer);
      //set num value to 4
      // await wallet.setValue(4);

      //send amt to contract
      // await wallet.sendEthContract({ value: ethers.utils.parseEther("0.01") });

      //send eth to acc
      await wallet.sendEthUser("0xDec48C3Bc983cE34DA90A1395D3a4dff315157F1", {
        value: ethers.utils.parseEther("0.01"),
      });
    };
    writecontrcat();
  }, []);
  return <div className="App"></div>;
}

export default App;
