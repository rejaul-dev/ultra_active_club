import React, { useEffect, useState } from "react";
import Questions from "../Questions/Questions";
import Sidebar from "../Sidebar/Sidebar";
import SingleCard from "../SingleCard/SingleCard";

const Home = () => {
  const [cardInfo, setCardInfo] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardInfo(data));
  }, []);

  const handleAddToList = (cardInfo) => {
    console.log(cardInfo);
    const newCart = [...cart, cardInfo];
    setCart(newCart);
  };

  return (
    <div>
      <div className="lg:flex lg:justify-between px-8">
        <div className="mt-10 mb-20">
          <h1 className="text-xl text-center lg:text-left font-bold">Select today's exercise</h1>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {cardInfo.map((cardInfo) => (
              <SingleCard
                cardInfo={cardInfo}
                key={cardInfo?.id}
                handleAddToList={handleAddToList}
              ></SingleCard>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Sidebar cart={cart}></Sidebar>
        </div>
      </div>
      <div className="w-9/12 mx-auto mt-10 mb-20">
      <Questions></Questions>
      </div>
    </div>
  );
};

export default Home;
