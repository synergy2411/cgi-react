import React from "react";
import { useParams } from 'react-router-dom';

function FunctionalComponent(props){
    console.log("PROPS : ", props);
    console.log("USE PARAMS : ", useParams());

 return (
 <div>
     <p>Functional Component Demo....</p>
     <ul>
         <li>Tea</li>
         <li>Coffee</li>
         <li>Milk</li>
     </ul>
 </div>
 ) 
}

export default FunctionalComponent;