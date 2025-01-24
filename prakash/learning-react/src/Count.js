//export default function Count({count, increment, decrement, handleCount}){
    export default function Count(countObj){
    return (
        <>
            <div>{countObj.count}</div>
            {/* <input type="text" onChange={countObj.handleCount} /> */}
            <button onClick={countObj.increment}>+</button>
            <button onClick={countObj.decrement}>-</button>
        </>
    )

}


// Count(countObj) {
//     countObj.c
// }