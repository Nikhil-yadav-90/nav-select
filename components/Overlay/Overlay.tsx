import NavBar from "./NavBar";
import cardData from "@/Data/cardData.json";
import { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Overlay = (props: any) => {
  const [displayList, setDisplayList] = useState<any>([]);
  const [showModal, setShowModal] = useState<any>(false);
  const [imgArray, setImgArray] = useState<any>([]);

  const displayHandler = (val: any) => {
    const { data } = cardData;
    const filterValue = JSON.parse(val).value;

    if (filterValue == "rooms" || filterValue == "suits") {
      const displayList = data.filter((elem) => elem.type === filterValue);
      setDisplayList(displayList);
      setShowModal(true);
      setImgArray([]);
    } else {
      setDisplayList([]);
    }
  };

  const clickhandler = (val: any) => {
    if (val.target.checked) {
      setImgArray([...imgArray, val.target.value]);
    } else {
      const nArr = imgArray.filter((item: any) => item != val.target.value);
      setImgArray(nArr);
    }
  };

  return (
    <div className="container mb-3" style={{ border: "1px solid black" }}>
      <NavBar onChange={displayHandler} />

      {showModal && (
        <Modal closeHandler={setShowModal}>
          <div className="row">
            {displayList.map((elem: any) => {
              return (
                <Card
                  key={elem.id}
                  imgUrl={elem.name}
                  id={elem.id}
                  onClick={clickhandler}
                />
              );
            })}
            <div className="col-6" >
              <Button
                onClick={() => {
                  props.showImgs(imgArray);
                  setShowModal(false);
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Overlay;
