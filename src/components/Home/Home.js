import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SingleCard from "../SingleCard/SingleCard";

const Home = () => {

  const [cardInfo, setCardInfo]=useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data=>setCardInfo(data))
  },[cardInfo])

  return (
    <div className="flex justify-evenly px-10">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {cardInfo.map((cardInfo) => (
          <SingleCard cardInfo={cardInfo}></SingleCard>
        ))}
      </div>

      <div className="">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Home;
