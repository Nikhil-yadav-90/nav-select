import SelectOption from "../UI/SelectOption";
import Button from "../UI/Button";

const NavBar = (props:any) => {
  const options = [{ label: "Rooms", value: "rooms" }, {label:"Suits",value:"suits"}];

  const submitHandler = (e:any) => {
    console.log("Jai Shree Ram Button Submit Handler",props.addImage);
  };

  const selectChangeHandler = (selectVal:any)=>{
    // console.log("jai Shree Ram from select Change handler",selectVal);
    props.onChange(selectVal);

  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          Please Select Option First
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <SelectOption 
              options={options}
              onChange={selectChangeHandler}
              />
            </div>

            <div className="col-6">
              <Button onClick={submitHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
