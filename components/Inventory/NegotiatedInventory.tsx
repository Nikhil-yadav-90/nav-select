import CustomCalender from "../Calender/Calender";

const Negotiated = (props: any) => {
  return (
    <>
      <div
        className="row my-2 py-2"
      >
        <div className="row">
          <div className="col-3">
            <h3>Negotiated Inventory</h3>
          </div>
          <div className="col-5 py-1" >
            <CustomCalender dateValue={new Date()} />
          </div>
          <div className="col-4">cta</div>
        </div>

        {/* <div className="row">calender detail</div>

        <div className="row">rooms detail</div> */}
      </div>
    </>
  );
};

export default Negotiated;
