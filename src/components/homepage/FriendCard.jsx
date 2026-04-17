import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {

   
    const {id,picture,name,days_since_contact,tags,status}=friend;
    let statusStyle='';
    if(status==='almost due'){
        //
        statusStyle='bg-[#EFAD44]';
    }
    else if(status==='overdue'){
        //
        statusStyle='bg-[#EF4444]';
    }
    else if(status==='on-track'){
        //
        statusStyle='bg-[#244D3F]';
    }
    
    
    return (
        <Link to={`/friend/${id}`} className='bg-white border-white shadow-md rounded-xl py-5 text-center'>
           <img className='mx-auto w-20 h-20 rounded-full' src={picture} alt="" />
           <h3 className='font-semibold text-xl mt-3 mb-2'>{name}</h3>
           <p className='text-[#64748B] mb-2 text-sm'>{days_since_contact}d ago</p>
           <div className='flex gap-2 justify-center mb-3'>
           {
            tags.map((tag,index)=>{
                return <span key={index} className='bg-[#CBFADB] text-[#244D3F] p-1 rounded-full'>{tag}</span>
            })
           }
           </div>

           <span className={`rounded-md p-1 2 text-white ${statusStyle}`}>{status}</span>
           
        </Link>
    );
};

export default FriendCard;