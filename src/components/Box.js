// import React from "react";
import { useState, useEffect } from "react";
import setting from "../Assets/icons8-settings.svg";
import ete from "../Assets/icons8-ethereum.svg";
import * as React from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import ConfirmSwap from "./ConfirmSwap";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Box = () => {
  const [number, setNumber] = useState("");
  const [exChange, setExchange] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
    const changeHandler = (e) => {
      setNumber(e.target.value);
    };
    useEffect(() => {
      setExchange(number * 10);
    }, [number]);
    
    const exHandler = (e) => {
      setExchange(e.target.value);
    };
  const [balance, setBalance] = useState(26)
  const handleClose = () => {
    setOpen(false);
    setBalance(balance - number)
  };
 
  return (
    <div className="box">
      <div className="box-header">
        <div>
          <img className="icon" src={setting} alt="icon" />
        </div>
        <div>Swap</div>
      </div>
      <div className="box-content">
        <div className="first-box">
          <input
            value={number}
            onChange={changeHandler}
            className="input-number"
            inputMode="decimal"
            type="text"
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
          <span className="the-num"> {balance} </span>
        </div>
        <div className="second-box">
          <input
            value={exChange}
            onChange={exHandler}
            className="input-number second"
            inputMode="decimal"
            type="text"
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
          <span className="the-num"> {number} </span>
        </div>
        <div className="btn">
          <button onClick={handleClickOpen} className="wallet-btn"> Connect wallet </button>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move", hright: "400px"}} id="draggable-dialog-title">
            Confrim Swap
          </DialogTitle>
          <DialogContent>
            <DialogContentText component={'div'}>
              <ConfirmSwap number={number} exChange={exChange} setNumber={changeHandler} setExchange={exHandler} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Swap</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Box;
