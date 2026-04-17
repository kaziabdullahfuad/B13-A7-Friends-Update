import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendDetailsContext } from '../../context/FriendDetailsContext';




const StatsPage = () => {

    const {timelines}=useContext(FriendDetailsContext);

    const text_times=timelines.filter(timeline=>timeline.communicate==='Text');
    const video_times=timelines.filter(timeline=>timeline.communicate==='Video');
    const call_times=timelines.filter(timeline=>timeline.communicate==='Call');

    const data=[
        {name:'Text',value:text_times.length,fill:'#7E35E1'},
        {name:'Call',value:call_times.length,fill:'#244D3F'},
        {name:'Video',value:video_times.length,fill:'#37A163'}
        
    ]

     

     console.log(timelines.length);
     

    return (
        <div className='py-20 w-10/12 mx-auto'>
        
        <h3 className='font-bold text-5xl mb-6'>Friendship Analytics</h3>
        <div className='p-8 shadow-md rounded-md'>
           <h3 className='text-xl font-semibold mb-6'>By Interaction Type</h3>
            <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
      </div>
        </div>
    );
};

export default StatsPage;