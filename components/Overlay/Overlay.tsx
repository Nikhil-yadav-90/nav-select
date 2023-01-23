import NavBar from "./NavBar";
import cardData from "@/Data/cardData.json";
import { useState } from "react";
import Card from "../UI/Card";

const Overlay = (props:any) => {
  const [displayList, setDisplayList] = useState<any>([]);

  const [imgArray, setImgArray] = useState<any>([]);



  const displayHandler = (val: any) => {
    const { data } = cardData;
    const filterValue = JSON.parse(val).value;

    

    if (filterValue == "rooms" || filterValue == "suits" ) {
      const displayList = data.filter((elem) => elem.type === filterValue);
      setDisplayList(displayList);
      setImgArray([]);
    }else {
      setDisplayList([]);
    }
  };

  const clickhandler = (val: any) => {
    if (val.target.checked) {
      setImgArray([...imgArray, val.target.value]);
    } else {
      const nArr = imgArray.filter((item:any) => item != val.target.value);
      setImgArray(nArr);
    }
  };



  return (
    <div className="container" style={{ border: "1px solid black" }}>
      <NavBar onChange={displayHandler}
      submitHandler={()=>props.showImgs(imgArray)}
      />

      <div className="row">
       
        {displayList.map((elem: any) => {
          return <Card key={elem.id} imgUrl={elem.name} id={elem.id} onClick={clickhandler} />;
        })}
      </div>
    </div>
  );
};

export default Overlay;
