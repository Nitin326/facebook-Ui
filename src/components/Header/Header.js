import React from "react";
import '../Assats/Styles/Header.css'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { MdOndemandVideo } from 'react-icons/md'
import { FaRegFlag, FaUserFriends, FaUsers, FaPlusCircle, FaFacebookMessenger, FaBell, FaAngleDown } from 'react-icons/fa'
import logo from '../Assats/Images/logo.png'
import img1 from '../Assats/Images/1.jpeg'

function HeaderArea() {
    return (
        <div className="HomePage">
            <div className="header">

                <div className="logo">
                    <img src={logo} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "1rem" }} />
                </div>
                <div className="Search">
                    <AiOutlineSearch style={{ height: "4rem" }} />
                    <input placeholder="Search Facebook" type="Search" />
                </div>
                <div className="Icon">
                    <AiFillHome fontSize="1.5rem" color="rgba(0, 0, 0, 0.663)" />
                </div>
                <div className="Icon">
                    <FaRegFlag fontSize="1.5rem" color="rgba(0, 0, 0, 0.663)" />
                </div>
                <div className="Icon">
                    <MdOndemandVideo fontSize="1.5rem" color="rgba(0, 0, 0, 0.663)" />
                </div>
                <div className="Icon">
                    <FaUsers fontSize="1.5rem" color="rgba(0, 0, 0, 0.663)" />
                </div>
                <div className="Icon">
                    <FaUserFriends fontSize="1.5rem" color="rgba(0, 0, 0, 0.663)" />
                </div>

                <div className="header-profile">
                    <img src={img1} alt="dp" style={{ height: "30px", width: '30px', borderRadius: '50%' }} />
                    <p>Nitin Sain</p>
                </div>
                <div className="plus-icon">
                    <div className="plus">
                        <FaPlusCircle fontSize="1.5rem" />
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize="1.5rem" />
                    </div>
                    <div className="plus">
                        <FaBell fontSize="1.5rem" />
                    </div>
                    <div className="plus">
                        <FaAngleDown fontSize="1.5rem" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderArea