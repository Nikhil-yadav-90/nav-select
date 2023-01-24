import React, { useState } from "react";
import Calendar from "react-calendar";
import date from 'date-and-time';
import Modal from "../UI/Modal";

const CustomCalender = ({ dateValue }: any) => {
  const [value, onChange] = useState(new Date());
  const [showCalender, setShowCalender] = useState<any>(false);
  const [dateVal, setDateVal] = useState<any>({
                                            fromDate: date.format(dateValue,"YYYY-MM-DD"),
                                            toDate: date.format(date.addDays(dateValue,40),"YYYY-MM-DD"),
                                        });


  const toDateHandler = () => {
    setShowCalender(!showCalender);
    console.log(date.format(date.addDays(new Date(),40),"YYYY-MM-DD"))
  };


  const calenderChangeHandler = (e:any)=>{
    setDateVal({ 
        ...dateVal, 
        fromDate: date.format(e, "YYYY-MM-DD"),
        toDate: date.format(date.addDays(e,40),"YYYY-MM-DD")
    });
    setShowCalender(false);
  }

  return (
    <>

      {showCalender && (
       <Modal
       title={'Calender'}
       closeHandler= {setShowCalender}
       >
        <Calendar onChange={calenderChangeHandler} value={value} />
       </Modal>
      )}

      <div className="row">
        <div className="col-2">
          <h6>From/to:</h6>
        </div>
        <div className="col-5">
          <input
            className="w-100"
            type="button"
            value={dateVal.fromDate}
            onClick={toDateHandler}
          />
        </div>
        <div className="col-5">
          <input type="text" disabled={true} value={dateVal.toDate} />
        </div>
      </div>
    </>
  );
};

export default CustomCalender;
