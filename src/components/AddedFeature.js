import React from 'react';
import { connect } from 'react-redux' // HOC

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

//wrap component in the second connect function call
export default connect(
 (state) => {
   return {
      titleOnProps:state.title
   }
},
  {}
  )(AddedFeature); // function currying
