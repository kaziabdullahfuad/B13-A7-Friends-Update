import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PacmanLoader } from 'react-spinners';
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FriendDetailsContext } from '../../context/FriendDetailsContext';
import { toast } from 'react-toastify';


const FriendDetails = () => {

    const {id}=useParams();
    
    const [friends,setFriends]=useState([]);
    const [loading,setLoading]=useState(true);
    
    const {timelines,setTimeline}=useContext(FriendDetailsContext);
    
    
    
    useEffect(()=>{

        const fetchData=async()=>{
            const res=await fetch("/friends.json");
            const data=await res.json();
            // console.log(data);
            setFriends(data);
            setLoading(false);
        }
        fetchData();

    },[])
    
    const expectedFriend=friends.find(friend=>String(friend.id)===id);
    
    const statusStyle={
        "overdue":'bg-[#EF4444]',
        "almost due":'bg-[#EFAD44]',
        "on-track":'bg-[#244D3F]'
    }
    
    const handleTimeline=(communicate)=>{

        console.log("Clicked korsi kishe?",communicate);
        toast.success(`Timeline info created with ${expectedFriend.name}`);
        

        const {name}=expectedFriend;
        const today_date=String(new Date());
        // ekta new object banabo naki?
        const hold_object={
            communicate,
            name,
            today_date
        }
        setTimeline([...timelines,hold_object]);
        console.log(timelines);
    }
    
    

    return (
        <div>
             {loading? (
                <div className='flex justify-center'>
                    <PacmanLoader />
                </div>) : (<div className='my-20 w-10/12  mx-auto'>
                    
                    <div className='grid md:grid-cols-4 gap-6'>
                        
                    
                    <div className='bg-white shadow-md text-center p-6 rounded-md md:col-span-1 md:row-span-2'>
                        <div className=''>
                            <img className='w-20 h-20 mx-auto rounded-full' src={expectedFriend.picture} alt="" />
                        </div>
                        <h3 className='font-semibold text-xl mt-3 mb-2'>{expectedFriend.name}</h3>
                         <span className={`p-1 2 text-white rounded-full w-fit ${statusStyle[expectedFriend.status]}`}>{expectedFriend.status}</span>
                        <div className='flex gap-2 justify-center mb-3 mt-2'>
                        {
                            expectedFriend.tags.map((tag,index)=>{
                                return <span key={index} className='bg-[#CBFADB] text-[#244D3F] p-1 rounded-full w-fit'>{tag}</span>
                            })
                        }
                        </div>
                        <p className='text-[#64748B] mb-2'>{expectedFriend.bio}</p>
                        <p className='text-[#64748B]'>{expectedFriend.email}</p>

                        
                        
                    </div>
                    
                    
                    <div className='shadow-md text-center py-8 px-4'>
                        <h3 className='font-semibold text-2xl mb-2'>{expectedFriend.days_since_contact}</h3>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='shadow-md text-center py-8 px-4'>
                        <h3 className='font-semibold text-2xl mb-2'>{expectedFriend.goal}</h3>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='shadow-md text-center py-8 px-4'>
                        <h3 className='font-semibold text-2xl mb-2'>{expectedFriend.next_due_date}</h3>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>

                    <div className='md:col-span-3 p-7 shadow-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-[#244D3F] text-xl'>Relationship Goal</h3>
                            <button className='py-2 px-4 bg-[#E9E9E9]'>Edit</button>
                        </div>
                        <p className='text-[#1F2937]'>Connect every <span className='font-bold'>{expectedFriend.goal} days</span></p>
                    </div>

                    <div className='shadow-md text-center'>
                        <button className='flex mx-auto items-center justify-center font-semibold gap-1 py-4'><HiOutlineBellSnooze /> Snooze 2 weeks</button>
                    </div>
                    
                     <div className='shadow-md md:col-span-3 md:row-span-3 p-6 rounded-md'>
                       <h3 className='text-[#244D3F] text-xl font-semibold mb-4'>Quick Check-In</h3>
                        <div className='grid md:grid-cols-3 gap-4'>
                            <div onClick={()=>handleTimeline('Call')} className='border-[#E9E9E9] border rounded-md shadow-md p-4 text-center'>

                                <button>
                                    <IoIosCall className='w-6 h-6 mb-2' />
                                    <p>Call</p>
                                </button>
                            </div>
                            <div onClick={()=>handleTimeline('Text')} className='border-[#E9E9E9] shadow-md p-4 text-center border rounded-md'>

                                <button>
                                    <MdOutlineMessage className='w-6 h-6 mb-2' />
                                    <p>Text</p>
                                </button>
                            </div>
                            <div onClick={()=>handleTimeline('Video')} className='border-[#E9E9E9] shadow-md p-4 text-center border rounded-md'>

                                <button>
                                    <IoVideocamOutline className='w-6 h-6 mb-2' />
                                    <p>Video</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-md text-center'>
                        <button className='flex mx-auto items-center justify-center font-semibold gap-2 py-4'><FaArchive /> Archive</button>
                    </div>
                    <div className='shadow-md text-center'>
                        <button className='flex mx-auto items-center justify-center font-semibold gap-2 text-[#EF4444] py-4'><RiDeleteBin6Line /> Delete</button>
                    </div>

                   
                    
                </div>
            </div>)}
        </div>
    );
};

export default FriendDetails;