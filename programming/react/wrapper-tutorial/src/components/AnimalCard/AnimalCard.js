import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import AnimalDetails from "../AnimalDetails/AnimalDetails";
function AnimalCard({ name, size, ...props }) {
  //...props คือการผ่านค่า props ที่ไม่ได้ใช้ใน component นี้
  //และต้องการส่งค่า prop  ไปยัง  componant  อื่น
  //ประโยชน์คือกรณีมีการเพิ่มค่า prop ก็ไม่ต้องแก้การผ่านค่า
  return (
    <Card title="Animal" details={<em>Mammal</em>}>
      <div>
        <h3>{name}</h3>
        <div>{size} kg</div>
        <AnimalDetails {...props} />
      </div>
    </Card>
  );
}
AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default AnimalCard;
