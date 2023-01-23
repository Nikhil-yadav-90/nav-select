const SelectOption = (props:any) => {
  return (
    <>
      <select className="form-select" aria-label="Default select example" onChange={(e)=>{
        props.onChange(e.target.value)
      }}
        >
        <option selected value={JSON.stringify({label:"select",value:"nan"})}>Open this select menu</option>
    {    props.options.map((elem:any,idx:any)=>{
            return (
                <option  key={idx} value={JSON.stringify(elem)}>{elem.label}</option>
            )
        })}
      </select>
    </>
  );
};

export default SelectOption;
