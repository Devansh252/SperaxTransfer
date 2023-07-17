import React from "react";
import {
  grey_sperax,
  discord,
  telegram,
  twitter,
  github,
  medium,
  usds,
  vespa,
  geko,
  m,
  swap,
  bridge,
  copy,
  externallink,
  spa,
  wspa,
  downarrow,
  arrow,
} from "../assets";

function Footer() {
  return (
    <div className="w-full bg-[#f4f6f8] flex justify-center flex-col items-center py-10">
      <div className="max-w-7xl w-full h-auto">
        <div className="flex flex-wrap gap-4 p-4 justify-between pb-9">
          <div className="flex items-center gap-4 ">
            <img alt="logo" src={grey_sperax} />
            <div className="rounded-full border border-gray-200 py-2 px-4">
              <span>Forum</span>
            </div>
            <div className="rounded-full border border-gray-200 py-2 px-4">
              <span>Snapshot</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img alt="logo" src={discord} />
            <img alt="logo" src={twitter} />
            <img alt="logo" src={telegram} />
            <img alt="logo" src={github} />
            <img alt="logo" src={medium} />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4 justify-between">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center  gap-4">
                <img alt="" src={usds} />
                <span className="text-sm font-bold text-gray-700">
                  USDs Arbitrum
                </span>
                <img alt="" src={copy} />
                <img alt="" src={externallink} />
              </div>
            </div>
            <div className="flex items-center gap-4 mb-10">
              <img alt="" src={m} />
              <img alt="" src={geko} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center  gap-4">
                <img alt="" src={spa} />
                <span className="text-sm font-bold text-gray-700">
                  SPA Arbitrum
                </span>
                <img alt="" src={downarrow} />
                <img alt="" src={copy} />
                <img alt="" src={externallink} />
              </div>
            </div>
            <div className="flex items-center gap-4 mb-10">
              <img alt="" src={m} />
              <img alt="" src={geko} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center  gap-4">
                <img alt="" src={vespa} />
                <span className="text-sm font-bold text-gray-700">
                  veSPA Arbitrum
                </span>
                <img alt="" src={downarrow} />
                <img alt="" src={copy} />
                <img alt="" src={externallink} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center  gap-4">
                <img alt="" src={wspa} />
                <span className="text-sm font-bold text-gray-700">
                  wSPA Ethereum
                </span>
                <img alt="" src={copy} />
                <img alt="" src={externallink} />
              </div>
            </div>
            <div className="flex text-sm font-bold  flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <img alt="" src={swap} />
                <span>SPA </span>
                <img src={arrow} alt="" />
                <span>wSPA</span>
              </div>
              <div className="flex items-center gap-3">
                <img alt="" src={bridge} />
                <span>Sperax- Arbitrum Bridge</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between p-4">
          <span className="text-gray-400 text-sm font-normal">
            © 2023 Sperax Inc. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-4 items-center text-gray-700 font-bold text-sm">
            <span>Privacy Policy</span>
            <div className="rounded-full w-[6px] h-[6px]  bg-gray-400"></div>
            <span>Link Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
