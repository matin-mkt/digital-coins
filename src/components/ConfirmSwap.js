import React from 'react';
import ete from "../Assets/icons8-ethereum.svg";


const ConfirmSwap = (number, exChange, setNumber, setExchange) => {
    console.warn(number);
    console.warn(exChange);
    console.warn(setNumber);
    console.warn(setExchange);
    return (
        <div>
             <div className="box-content">
        <div className="first-box">
          <input
            defaultValue={number.number}
            onChange={number.setNumber}
            className="input-number"
            inputMode="decimal"
            type="text"
            disabled="disabled"
            placeholder="0.0"
          />
          <button className="eth-btn">
            <span>
              <div className="btn-items">
                <img className="ete" src={ete} alt="ete" />
                <span>ETH</span>
              </div>
            </span>
          </button>
          <span className="the-num"> {} </span>
        </div>
        <div className="second-box">
          <input
            defaultValue={number.exChange}
            className="input-number second"
            inputMode="decimal"
            type="text"
            disabled="disabled"
            onChange={number.setExchange}
            placeholder="0.0"
          />
          <button className="eth-btn">
            <span>
              <div className="btn-items">
                <img className="ete" src={ete} alt="ete" />
                <span>ETH</span>
              </div>
            </span>
          </button>
          <span className="the-num">24</span>
        </div>
      </div>
        </div>
    );
};


export default ConfirmSwap;