import {useState} from "react";
import {Button} from "./button";
import  './style.css'
export function App() {
    const [message, setMessage] = useState('')
    const [shift, setShift] = useState(false)
    const [caps, setCaps] = useState(false)
    const lettersHandler = (letter)=>{

        setMessage((prevState) => {
            if(caps && shift){
                setShift(false)
                return prevState + letter.toLowerCase()
            }
            else if(caps){
                return prevState + letter
            }
            else if(shift){
                setShift(false)
                return prevState + letter
            }
            return prevState + letter.toLowerCase()
        })
    }
    const  letters = [];
    for (let index =65; index <= 90; index++){
        letters.push(String.fromCharCode(index))
    }


  return (
    <div className="App">
        <input type="text" value={message} />
        <div className='button'>Caps <input type="checkbox" checked={caps} onClick={()=> setCaps((prevState => !prevState))}/></div>
        <div className='button' onClick={()=> setMessage(prevState => prevState.substring(0, prevState.length - 1))}>Backspace</div>
        <div className='button'>shift <input type="checkbox" checked={shift} onClick={()=> setShift((prevState => !prevState))}/></div>
        <div className='container'>{letters.map(letter => <Button  onClick={() => lettersHandler(letter)} up={letter} down={letter.toLowerCase()}/>)}</div>
    </div>
  );
}


