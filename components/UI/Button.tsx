const Button = (props:any)=>{
    return (
        <>
            <button type="submit" className={"btn btn-primary mb-3"} onClick={props.onClick}>
                Add Images
              </button>
        </>
    )
};


export default Button