import React from "react";

const Card = ({ robot }) => {
  const { name, birth_year, created } = robot;
  return (
    <div className="bg-light-blue dib pa3 bw2 br3 ma2 shadow-3 grow">
      <div>
        <img
          src={`https://robohash.org/${created}/set_any/bgset_any/size_200x200`}
          alt="humans"
        />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{birth_year}</p>
      </div>
    </div>
  );
};

export default Card;
