import React from 'react';
import './AnimalCard.css'
import PropTypes from 'prop-types';

function AnimalCard({
      additional,
      diet,
      name,
      scientificName,
      showAdditional,
      size
    }){
        return (
                <div className="animal-wrapper">
                  <h2>{name}</h2>
                  <h3>{scientificName}</h3>
                  <h4>{size}kg</h4>
                  <div>{diet.join(', ')}.</div>
                  <button onClick={() => showAdditional(additional)}>More Info</button>
                </div>
              );
             
}
AnimalCard.propTypes= {
  additional:PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
}
export default AnimalCard;
// export default function AnimalCard({
//   additional,
//   diet,
//   name,
//   scientificName,
//   showAdditional,
//   size
// }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h3>{scientificName}</h3>
//       <h4>{size}kg</h4>
//       <div>{diet.join(', ')}.</div>
//       <button onClick={() => showAdditional(additional)}>More Info</button>
//     </div>
//   );
// }

// export default function AnimalCard(props){
//     const {additional,diet,name,scientificName,showAdditional,size} = props;
//     return (
//        <div>
//        <h2>{props.name}</h2>
//        <h3>{props.scientificName}</h3>
//        <h4>{props.size} kg</h4>
//        <div>{props.diet.join(', ')}</div>
//        <button onClick={()=>props.howAdditional({props.additional})}>More Info</button>
//        </div> 
//     );
// }

// import React from 'react';
// import './AnimalCard.css'

