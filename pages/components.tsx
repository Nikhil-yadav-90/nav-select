import Overlay from "@/components/Overlay/Overlay";
import ViewPort from "@/components/ViewPort/ViewPort";
import { useState } from "react";


const ComponentModal = () => {

const [showImgs,setShowImgs] = useState<any>([]);

const imageHandler = (val:any)=>{
  setShowImgs(val)
}

  return (
    <>
      <div className="container-fluid my-5">
        
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
