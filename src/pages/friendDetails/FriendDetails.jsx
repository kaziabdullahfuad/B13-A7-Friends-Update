import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {

    const {id}=useParams();
    console.log(id,"this is params");

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
    
    const expectedFriend=friends.find(friend=>friend.id===id);
    console.log("Expected friend", expectedFriend)

    return (
        <div>
            Friend details page
        </div>
    );
};

export default FriendDetails;