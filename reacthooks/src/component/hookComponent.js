import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';
const url = "http://zomatoajulypi.herokuapp.com/location"

function HooksComponent(){
    const [title] = useState("Hooks React App");
    const [count,setCount] = useState(0);/* first that is count is the variable name and second setCount is the update variable name */
    const [count1,setCount1] = useState(1);
    const [city,setCity] = useState();
    const updateCount = () =>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("in use effect");
        fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(data => {
            setCity(data);
        })
    },[]);
    /*
    Note : When u use no bracket then in use effect then it will call on load and on the state change or when we use empty bracket then it will load once useEffect() is called when u pass the state name then it will load when this state value is changed
    */
    return(
        <>
            <h1>Hook App</h1>
            <h2>{title}</h2>
            <h2>{count}</h2>
            <button onClick={updateCount}>Update Count 0</button>
            <h2>{count1}</h2>
            <button onClick={()=>{setCount1(count1+1)}}>Update Count 1</button>
            <DisplayComponent mycity={city}/>
        </>
    )
}

export default HooksComponent