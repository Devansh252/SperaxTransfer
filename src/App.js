import "./App.css";
import React, { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Web3 from "web3";

function App() {
  const [walletWeb3, setWalletWeb3] = useState(null);
  const [error, setError] = useState();
  const [connectedAddress, setConnectedAddress] = useState();
  const connectWeb3 = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3Instance = new Web3(window.ethereum);
        setWalletWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setConnectedAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to Web3:", error);
        setError("Unable to connect Wallet for Transfer!");
      }
    } else {
      console.error("Web3 provider not found.");
    }
    return;
  };

  return (
    <div className="w-full h-full flex items-center flex-col">
      <Navbar connectedAddress={connectedAddress} connectWeb3={connectWeb3} />
      {error && (
        <div className="card lg:w-[540px] flex items-center">
          <span>{error}</span>
        </div>
      )}
      <CardsContainer walletWeb3={walletWeb3} connectWeb3={connectWeb3} />
      <Footer />
    </div>
  );
}

export default App;
