import React from "react";
import "./SocialProof.scss";

import bitmex from "../../../../assets/img/Social-Proof/bitmex-OK.png";
import binance from "../../../../assets/img/Social-Proof/binance-OK.png";
import digi from "../../../../assets/img/Social-Proof/digifinex-OK.png";
import blockport from "../../../../assets/img/Social-Proof/blockport-OK.png";

const SocialProof = () => {
  return (
    <>
      <div className="container social-block">
        <div className="separate-line"></div>

        <div className="row text-center">
          <div className="col">
            <img src={bitmex} className="social-proof mx-4" alt="binance" />
            <img src={binance} className="social-proof mx-4" alt="binance" />
            <img
              src={blockport}
              className="social-proof mx-4"
              alt="blockport"
            />
            <img src={digi} className="social-proof mx-4" alt="digi" />
          </div>
        </div>

        <div className="separate-line"></div>
      </div>
    </>
  );
};

export default SocialProof;
