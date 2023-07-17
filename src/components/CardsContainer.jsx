import React, { useState } from "react";
import Web3 from "web3";
import { contractABI, contractAddressERC20 } from "../components/useContract";
import { loader } from "../assets";

const web3 = new Web3(process.env.REACT_APP_YOUR_SEPOLIA_ETHEREUM_NODE_URL);

function CardsContainer({ walletWeb3, connectWeb3 }) {
  const [balance, setBalance] = useState();
  const [address, setAddress] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    try {
      if (!web3) {
        throw new Error("Web3 not initialized.");
      }
      setLoading(true);
      setError("");

      if (!web3.utils.isAddress(address)) {
        throw new Error("Please Enter correct Ethereum address");
      }

      const contract = new web3.eth.Contract(contractABI, contractAddressERC20);
      const tokenBalance = await contract.methods.balanceOf(address).call();
      setBalance(web3.utils.fromWei(tokenBalance, "ether").toString() + " CY");
      // web3.eth
      //   .getBalance(address)
      //   .then((balance) => {
      //     const tokenBalance = web3.utils.fromWei(balance, "ether");
      //     setBalance(tokenBalance.toString() + " ETH");
      //     console.log("ETH Balance:", tokenBalance);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const transferTokens = async () => {
    await connectWeb3();
    try {
      setLoading(true);
      if (!web3) {
        throw new Error("Web3 not initialized.");
      }
      setError("");
      if (!web3.utils.isAddress(recipient)) {
        throw new Error("Please Enter correct recipient Ethereum address");
      }

      const ethAmount = web3.utils.toWei(amount, "ether");
      const tokenContract = new walletWeb3.eth.Contract(
        contractABI,
        contractAddressERC20
      );

      // Approve the transfer
      await tokenContract.methods
        .approve(recipient, ethAmount)
        .send({ from: address });

      // Transfer the tokens
      await tokenContract.methods
        .transfer(recipient, ethAmount)
        .send({ from: address });

      console.log("Tokens transferred successfully!");

      alert("Transfer successful!");
      fetchBalance();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-16 max-w-7xl w-full justify-center flex-col py-20 items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-3">ERC20 Token Balance</h1>
        <div className="card lg:w-[560px] w-full h-auto ">
          <span className="font-semibold mb-3">Ethereum Address</span>
          <input
            placeholder="Enter Ethereum Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input_field"
          ></input>
          <button
            onClick={fetchBalance}
            disabled={loading}
            className="primary_button mt-4 text-base"
          >
            Submit
          </button>
        </div>
      </div>
      {loading && <img alt="" className="w-8 h-8" src={loader}></img>}
      {error && (
        <div className="card lg:w-[540px] flex items-center">
          <span>{error}</span>
        </div>
      )}
      {balance && !error && (
        <div className="flex flex-col justify-center items-center">
          <div className=" lg:w-[560px] w-full rounded-lg card_2 p-0 ">
            <div className=" h-14 bg-[#f4f6f8] "></div>
            <div className="bg-white px-10 py-4 flex justify-between">
              <span className="text-lg">Token Balance</span>
              <span className="font-semibold text-xl"> {balance}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-3">Transfer ERC20 Tokens</h1>
        <div className="card lg:w-[560px] w-full h-auto ">
          <span className="font-semibold mb-3">
            Recipient's Ethereum Address
          </span>
          <input
            placeholder="Enter Ethereum Address"
            className="input_field"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          ></input>
          <span className="font-semibold my-3">Token Amount</span>
          <input
            placeholder="Enter token amount"
            className="input_field"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
          <button
            onClick={transferTokens}
            className="primary_button mt-4 text-base"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
