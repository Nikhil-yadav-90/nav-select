import Overlay from "@/components/Overlay/Overlay";
import ViewPort from "@/components/ViewPort/ViewPort";
import { useState } from "react";


const ComponentModal = () => {

const [showImgs,setShowImgs] = useState<any>([]);

const imageHandler = (val:any)=>{
  console.log("Jai Shree Ram Component Image Handler",val);
  setShowImgs(val)
}

  return (
    <>
      <div className="container-fluid">
       <Overlay
       showImgs={imageHandler}
       />
       <ViewPort
       showImgs={showImgs}
       />
      </div>
    </>
  );
};

export default ComponentModal;
