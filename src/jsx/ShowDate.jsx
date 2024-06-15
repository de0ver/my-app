import React from "react";
 
export default function RealTime()
{
    const [currentTime, setCurrentTime] = React.useState();
    React.useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toString());
          }, 1000);
          return;
      }, []);
    return <div>{currentTime}</div>;
}