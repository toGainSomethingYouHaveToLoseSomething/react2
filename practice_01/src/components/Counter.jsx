
export default function Counter({count, setCount}){

    

    const handleOnClick = ()=>{
        setCount(count+1)
    }

    return (
        <>
            <button onClick={handleOnClick}>
                Clicked {count} times
            </button>
        </>
    )
}