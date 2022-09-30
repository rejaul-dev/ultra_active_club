import React from "react";

const SingleCard = (props) => {
  const { cardInfo, handleAddToList } = props;
  const { name, img, time } = cardInfo;

  return (
    <div>
      <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl">
        <figure className="px-4 pt-4 ">
          <img className="rounded-lg h-[200px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-md font-bold">Time Required: {time}min</p>
          <button onClick={()=>handleAddToList(cardInfo)} className="btn btn-default hover:bg-accent">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
