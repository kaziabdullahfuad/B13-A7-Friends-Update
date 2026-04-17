import { useState } from "react";
import { FriendDetailsContext } from "./FriendDetailsContext";





const FriendDetailsProvider = ({children}) => {

    const [timelines,setTimeline]=useState([]);
    const data={
        timelines,
        setTimeline
    }

    return <FriendDetailsContext.Provider value={data}>{children}</FriendDetailsContext.Provider>
};

export default FriendDetailsProvider;