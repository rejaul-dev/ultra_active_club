import React from "react";

const SingleCard = (props) => {
  console.log(props);
  const { name, img, time } = props.cardInfo;
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure className="px-4 pt-4 ">
          <img className="rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-md font-bold">Time Required: {time}</p>
          <button className="btn btn-primary">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
