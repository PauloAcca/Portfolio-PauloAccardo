import { useSelector, useDispatch} from "react-redux"
import { changeEmail } from "../redux/userSlice"
import { useState } from "react";

export const Email = () =>{
    const dispatch = useDispatch();
    const email = useSelector((state)=>state.user.email)
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(changeEmail(inputValue))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email"  placeholder="Email" value={inputValue} onChange={handleChange}></input>
                <button type="submit" >Submit</button>
            </form>
            
        </div>
        
    )
}