import React from 'react'
import { FaGrin} from 'react-icons/fa'
import { MdVideoCall} from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import STR1 from './Assats/Images/story.jpg';

const Mid = () => {
    return (
        <>
            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src={STR1} alt="IMG" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: '1rem', objectFit: 'cover' }} />
                        <p>Mark Zuckerberg</p>
                    </div>
                    <div className="Story">
                        <img src={STR1} alt="IMG" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: '1rem', objectFit: 'cover' }} />
                        <p>Mark Zuckerberg</p>
                    </div>
                    <div className="Story">
                        <img src={STR1} alt="IMG" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: '1rem', objectFit: 'cover' }} />
                        <p>Mark Zuckerberg</p>
                    </div>
                </div>
                <div className="message">
                    <div className="text">
                        <div className="Post">
                            <img src={STR1} alt="PIC" style={{ height: "50px", width: '50px', borderRadius: '50%', padding: '1rem', objectFit: 'cover' }} />
                            <input type="Mind" placeholder="What's on your mind, Anubhav?" />
                        </div>
                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="1.5rem" color="red" />
                                    <div>LiveVideo</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontSize="1.5rem" color="green" />
                                    <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontSize="1.5rem" color="orange" />
                                    <div>Felling/activity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src={STR1} alt="Img" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                <div className='profile-detail'>
                                <div className='update-name'>Nitin Sain</div>
                                <div className="update">6/13/2021, 3:53:21 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="caption">
                            Build a lasting bond with us!
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src={STR1} alt="dp" style={{ height: "auto", width: "100%" }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Mid