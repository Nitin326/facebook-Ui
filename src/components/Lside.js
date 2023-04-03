import React from 'react'
import JPG4 from './Assats/Images/story.jpg';
import { FaUserFriends, FaUsers, FaMapMarkedAlt, FaCalendar, FaAngleDown, FaMemory } from 'react-icons/fa'
import { MdOndemandVideo } from 'react-icons/md'

const Lside = () => {
    return (
        <>
            <div className="Rside" style={{ height: '100%' }}>
                <div className="Profile">
                    <img src={JPG4} alt="dp" style={{ height: "40px", width: '40px', borderRadius: '50%', padding: "1rem" }} />
                    Nitin Sain
                </div>
                <div className="Pro">
                    <FaUserFriends color="blue" fontSize="1.5rem" />
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaUsers color="blue" fontSize="1.5rem" />
                    <div>Groups</div>
                </div>
                <div className="Pro">
                    <FaMapMarkedAlt color="blue" fontSize="1.5rem" />
                    <div>Marketplaces</div>
                </div>
                <div className="Pro">
                    <MdOndemandVideo color="blue" fontSize="1.5rem" />
                    <div>Watch</div>
                </div>
                <div className="Pro">
                    <FaCalendar color="blue" fontSize="1.5rem" />
                    <div>Event</div>
                </div>
                <div className="Pro">
                    <FaMemory color="blue" fontSize="1.5rem" />
                    <div>Memories</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color="blue" fontSize="1.5rem" />
                    <div>See More</div>
                </div>
            </div>
        </>
    )
}

export default Lside;