import React from "react";
import './Assats/Styles/main.css'
import Rside from './Lside';
import Lside from './Rside';
import Mid from './Mid';

function MainArea() {
    return (
        <div className="Main">
            <Rside />
            <Mid />
            <Lside />
        </div>
    )
}
export default MainArea