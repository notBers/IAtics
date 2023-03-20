import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import gear from './gear.png'
import summarize from './summarize.png'
import assistance from "./assistance.png"

export function Citesmenu() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="container">
        <Link className="item" id='search' to={'/cites/engine'}><div><img src={gear} className='lupa'/></div>Engine</Link>
        <Link className="item" id="cites"  to={'/cites/manual'}>Manual</Link>

        <Link to={'/'} className='centered'>{"<"}</Link>
      </div>
    </>
  );
}