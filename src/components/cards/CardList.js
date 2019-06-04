import React from "react";
import Card from "./Card";
import Spinner from "../UI/Spinner/Spinner";

const CardList = ({ robotsArray }) => {
  const Cards = robotsArray.map(robot => {
    return <Card key={robot.created} robot={robot} />;
  });
  return <div className="tc mt2">{Cards.length ? Cards : <Spinner />}</div>;
};
export default CardList;
