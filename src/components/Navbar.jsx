import React from "react";
import styles from "./Navbar.module.css";
import {
  speraxlogo,
  externallink,
  downarrow,
  blacksperax,
  lightbutton,
  moredots,
} from "../assets";

function Navbar({ connectedAddress, connectWeb3 }) {
  return (
    <div className={styles.cointainer}>
      <div className="max-w-7xl w-full px-4">
        <div className="w-full h-full flex justify-between flex-row">
          <div className="flex flex-row items-center justify-center">
            <img src={speraxlogo} alt="sperax-logo" />
            <ul className="lg:flex h-full ml-5 gap-5 hidden">
              <li className="h-full font-semibold cursor-pointer items-center flex text-base">
                <span>Home</span>
              </li>
              <li className="h-full cursor-pointer  items-center flex text-base">
                <span>Demeter</span>
                <img
                  className="ml-2"
                  src={externallink}
                  alt="external link logo"
                />
              </li>
              <li className="h-ful cursor-pointerl items-center flex text-base">
                <span>Gauge</span>
              </li>
              <li className="h-ful cursor-pointerl items-center flex text-base">
                <span>Stake</span>
              </li>
              <li className="h-full cursor-pointer items-center flex text-base">
                <span>Buyback</span>
              </li>
              <li className="h-full cursor-pointer items-center flex text-base">
                <span>Swap</span>
              </li>
              <li className="h-full cursor-pointer items-center flex text-base">
                <span>More</span>
                <img className="ml-2" alt="down-arrow" src={downarrow} />
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="primary_button hidden lg:block">
              Buy SPA & USDs
            </button>
            <div className="rounded-full flex gap-1 items-center justify-center py-1 px-2 border border-gray-200 ">
              <img alt="" src={blacksperax} />
              <span>0</span>
              <img alt="" src={downarrow} />
            </div>
            <button onClick={connectWeb3} className="primary_button">
              {connectedAddress
                ? connectedAddress.slice(0, 10)
                : "Connect Wallet"}
            </button>
            <img alt="" className="hidden lg:block" src={lightbutton} />
            <img alt="" className="hidden lg:block" src={moredots} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
