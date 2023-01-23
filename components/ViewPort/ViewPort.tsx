import Image from "next/image";
import { useEffect } from "react";

const ViewPort = (props: any) => {
  useEffect(() => {
    console.log("$$$$$", props.showImgs);
  }, [props.showImgs]);

  return (
    <div className="container">
      <div
        className="row mt-5`"
        style={{ border: "1px solid black", height: "300px" }}
      >
        {props.showImgs.map((item: any) => {
          return (
            <div key={item} className="col-4">
              <div className="card">
                <Image
                  src={`/photos/${item}.jpg`}
                  width={288}
                  height={288}
                  alt="test"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewPort;
