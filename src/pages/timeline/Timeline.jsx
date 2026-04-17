import React, { useContext, useState } from 'react';
import { FriendDetailsContext } from '../../context/FriendDetailsContext';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import Caller from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"


const Timeline = () => {

    const {timelines,setTimeline}=useContext(FriendDetailsContext);
    // 1. State to hold the current filter value
    const [filter, setFilter] = useState('All');

    // 2. Logic to filter the list based on selection
    const filteredTimelines = timelines.filter(item => {
        if (filter === 'All') return true;
        return item.communicate === filter;
    });

    console.log(timelines)

    console.log(timelines);
    return (
        <div className='mt-20'>
            
            <div className='w-10/12  mx-auto'> 
                <h1 className='font-bold text-5xl mb-6'>Timeline </h1>

                {/* <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </div> */}

                {/* 3. The Filter UI */}
                <div className="relative mb-8 w-full max-w-xs">
                    <select 
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl appearance-none cursor-pointer text-slate-500 focus:outline-none shadow-sm"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Video">Video</option>
                        <option value="Text">Text</option>
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>

                <div className=''>
                {
                    filteredTimelines.map((timeline,index)=>{

                        return <div className='shadow-md mb-6 p-4 flex items-center gap-2 rounded-md' key={index}>

                            {timeline.communicate==='Text' ? <img src={Text} alt="" /> : 
                                (timeline.communicate==='Video' ? <img src={Video} alt="" /> : <img src={Caller} alt="" />)
                            }
                            <div className='mb-2'>
                                <h3><span className='font-bold text-[#244D3F]'>{timeline.communicate}</span> with {timeline.name}</h3>
                                {/* <p>{timeline.today_date}</p> */}
                                <p>{new Date(timeline.today_date).toLocaleString()}</p>
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