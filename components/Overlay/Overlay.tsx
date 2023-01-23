import NavBar from "./NavBar";
import cardData from "@/Data/cardData.json";
import { useState } from "react";
import Card from "../UI/Card";

const Overlay = () => {
  const [displayList, setDisplayList] = useState<any>([]);

  const [imgArray, setImgArray] = useState<any>([]);



  const displayHandler = (val: any) => {
    const { data } = cardData;
    const filterValue = JSON.parse(val).value;

    if (filterValue == "rooms" ) {
      const displayList = data.filter((elem) => elem.type === filterValue);
      setDisplayList(displayList);
    } else if(filterValue == "suits"){
      const displayList = data.filter((elem) => elem.type === filterValue);

      setDisplayList(displayList);
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
      addImage = {imgArray} />

      <div className="row">
        {displayList.map((elem: any, idx: any) => {
          return <Card key={idx} imgUrl={elem.name} onClick={clickhandler} />;
        })}
      </div>
    </div>
  );
};

export default Overlay;
