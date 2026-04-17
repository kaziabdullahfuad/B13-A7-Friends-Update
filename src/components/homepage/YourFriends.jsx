import React, { useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import { PacmanLoader } from 'react-spinners';

// const friendPromise=fetch("/friends.json").then(res=>res.json());

const YourFriends = () => {

    // const apps=use(friendPromise);

    // console.log(apps);

    // use effect ekta function duita parameter nei
    // callback function arekta dependency array

    const [friends,setFriends]=useState([]);
    const [loading,setLoading]=useState(true);

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
    
    console.log("This is friends from yourfriends",friends)

    return (
        <div className='mt-20  w-10/12 mx-auto'>
            <h3 className='mb-4 font-semibold text-2xl text-[#1F2937]'>Your Friends</h3>

            {loading? (
                <div className='flex justify-center'>
                    <PacmanLoader />
                </div>) : (<div className='grid md:grid-cols-4 gap-5'>
                {
                    friends.map((friend)=>{

                        return <FriendCard key={friend.id} friend={friend}></FriendCard>
                    })
                }
            </div>)}
        </div>
    );
};

export default YourFriends;