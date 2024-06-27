import { useState } from "react"
import { loginUser } from "../../firebase/index"
import { Link } from "react-router-dom"
import { useRegesContext } from "../../context/regestr"

export default function Login(){
    const [emailValue, setEmailValue] = useState("")
    const [PassValue, setPassValue] = useState("")
    const {reges, setReges} = useRegesContext()

    function login_fn(e){  
        e.preventDefault()
        loginUser(emailValue, PassValue)
            .then(res => {
                setReges(res)
                console.log(reges, res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setEmailValue('')
                setPassValue('')
            })
    }
    return(
        <div>
            <form className="flex flex-col justify-center items-center">
                <label className="text-white" >Email</label>
                <input value={emailValue} type="email" onChange={(e)=>{setEmailValue(e.target.value)}} placeholder="Your email.."/>
                <label className="text-white" >Password</label>
                <input value={PassValue} type="password" onChange={(e)=>{setPassValue(e.target.value)}}  placeholder="Your password.."/>     
                <Link to="/">
                    <input type="submit" onClick={(e) => login_fn(e)} value="Submit"/>
                </Link>   
            </form>
        </div>
    )
}