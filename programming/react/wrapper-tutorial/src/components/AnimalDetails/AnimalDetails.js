import React from "react";
import PropTypes from "prop-types";
import "../AnimalDetails/AnimalDetails.css";

function convertFood(food) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
}
//ฝั่งรับตัวแปร ...props ให้ระบุชื่อ prop ที่ต้องการได้เลย
function AnimalDetails({ diet, scientificName }) {
  return (
    <div className="details">
      <h4>Details:</h4>
      <div>Scientific Name:{scientificName}</div>
      <div>Diet: {diet.map((food) => convertFood(food)).join(" ")}</div>
    </div>
  );
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
};
export default AnimalDetails;
