import Image from "next/image";
import { useState } from "react";

const Card = (props:any) => {


  return (

    <div className="col-4">
      <div className="custom-control custom-checkbox image-checkbox">
        <input type="checkbox" value={props.imgUrl} className="custom-control-input" id={props.id}onChange={props.onClick} />
        <label className="custom-control-label" htmlFor={props.id}>
          {" "}
          <div className="card" style={{width:"100px",height:"100px"}} >
            <Image src={`/photos/${props.imgUrl}.jpg`}
            fill={true}
            //  sizes="(max-width: 768px) 1000vw,
            //   (max-width: 1200px) 1000vw,
            //   33vw" 
              alt="test" />
            <div className="card-body">
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p> */}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Card;
