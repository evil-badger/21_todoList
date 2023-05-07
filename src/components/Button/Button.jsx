const Button=({handleClick,title})=>{
    console.log(handleClick);
    return(
        <>
            <button
            onClick={handleClick}
            >
            {title}
            </button>
        </>
    )
}

export default Button