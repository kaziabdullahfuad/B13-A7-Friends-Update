import React, { useContext } from 'react';
import { FriendDetailsContext } from '../../context/FriendDetailsContext';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Caller from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"


const Timeline = () => {

    const {timelines,setTimeline}=useContext(FriendDetailsContext);

    console.log(timelines)

    console.log(timelines);
    return (
        <div className='mt-20'>
            
            <div className='w-10/12  mx-auto'> 
                <h1 className='font-bold text-5xl mb-6'>Timeline </h1>

                <div className=''>
                {
                    timelines.map((timeline,index)=>{

                        return <div className='shadow-md mb-6 p-4 flex items-center gap-2 rounded-md' key={index}>

                            {timeline.communicate==='Text' ? <img src={Text} alt="" /> : 
                                (timeline.communicate==='Video' ? <img src={Video} alt="" /> : <img src={Caller} alt="" />)
                            }
                            <div className='mb-2'>
                                <h3>{timeline.communicate} with {timeline.name}</h3>
                                <p>{timeline.today_date}</p>
                            </div>
                            
                        </div>
                    })
                }
            </div>
           

            </div>
        </div>
    );
};

export default Timeline;