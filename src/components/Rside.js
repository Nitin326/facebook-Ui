import React from 'react'
import JPG4 from './Assats/Images/story.jpg';
import {FaSearch} from 'react-icons/fa'
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md'

const Rside = () => {
    return (
        <>
            <div className="Lside" style={{height:'100%'}}>
                <div className="Contact">
                    <div className="Contacts">
                        Contacts
                    </div>

                    <div className="chaticon">
                        <div className="icons">
                            <MdVideoCall fontSize="1.5rem" />
                        </div>
                        <div className="icons">
                            <FaSearch fontSize="1.5rem" />
                        </div>
                        <div className="icons">
                            <MdMoreHoriz fontSize="1.5rem" />
                        </div>
                    </div>
                </div>
                <div className="concise">
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Jeff Bezoz
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Elon Musk
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Bill Gates
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Mark Zuckerberg
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Harry Potter
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        The Queen
                    </div>
                    <div className="Profilee">
                        <img src={JPG4} alt="logo" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "0.7rem" }} />
                        Games Bond
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rside