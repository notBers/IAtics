import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import search from './search_a.png'
import menu from './menu_a.png'
import edit from './edit_a.png'
import waterfall from "./waterfall.png"

export function Main() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="container">
        <Link className="item" id='search' to={'/search'}><div><img src={search} className='lupa'/></div>Search</Link>
        <Link className="item" id="cites"  to={'/cites'}><div><img src={menu} className='lupa'/></div>Cites</Link>
        <Link className="item" id='checker'to={'/checker'}><div><img src={edit} className='lupa'/></div>Checker</Link>
        <Link className="item" id='tools'  to={'/charts'}><div><img src={waterfall} className='lupa'/></div>Tools</Link>
      </div>
    </>
  );
}