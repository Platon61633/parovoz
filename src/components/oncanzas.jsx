import React from 'react';
import '../CSSComponents/canzas.css';
import cross from '../imagin/close.png'
import {  Link } from 'react-router-dom';
const OnCanzas = ({canzas}) => {
    return(
        <div className='onCanzas'>
        <img src={cross} alt='ЗАКРЫТЬ' width={50} onClick={canzas}/>
        <div className='CanzNav'>
        <Link to='/news' onClick={canzas} className='sfaw'>Новости</Link>
        <Link to='/katalog'onClick={canzas} className='sfaw'>Каталог</Link>
        <a className='sfaw' onClick={canzas} href='#kontakts'>
            Контакты
            </a>
            <a className='sfaw' onClick={canzas} href='#shops'>
        Магазины
            </a>
        </div>
        </div>
    );
};

export default OnCanzas