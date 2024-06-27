import { useState } from "react"
import { getData, getUser } from "../../firebase/index"
import { useRegesContext } from "../../context/regestr"
import { Link } from "react-router-dom"

export default function Signup(){
    const [emailValue, setEmailValue] = useState()
    const [PassValue, setPassValue] = useState()
    const [ConfirmPassValue, setConfirmPassValue] = useState()
    const {reges, setReges} = useRegesContext() 

    const signup_fn = async (e) =>{  
        if(PassValue == ConfirmPassValue){
            getUser({emailValue, PassValue, ConfirmPassValue})
            .then(res => {
                setReges(res)
                console.log(reges, res);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setEmailValue('')
                setPassValue('')
                setConfirmPassValue('')

            })
        }
        else{
            alert("Parolda xatolik bor")
        }
        // setEmailValue('')
        // setPassValue('')
    }
    return(
        <div>
            <form className="flex flex-col justify-center items-center">
                <label className="text-white" >Email</label>
                <input value={emailValue} type="email" placeholder="Your email.." onChange={(e)=>{setEmailValue(e.target.value)}}/>
                <label className="text-white" >Password</label>
                <input value={PassValue} type="password"  placeholder="Your password.." onChange={(e)=>{setPassValue(e.target.value)}}/>
                <label className="text-white" >Confirm password</label>
                <input value={ConfirmPassValue} type="password" placeholder="Confirm password.." onChange={(e)=>{setConfirmPassValue(e.target.value)}}/>            
                <Link to="/">
                    <input type="submit" value="Submit" onClick={signup_fn}/>
                </Link>
            </form>
        </div>
    )
}