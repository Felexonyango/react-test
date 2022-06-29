
import React,{useState,useEffect} from "react";



export default function App() {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("")
  const [isDisabled, setIsDisabled] = useState(true);
 
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };



  useEffect(() => {
    setIsDisabled(!validateEmail(email));
    setIsDisabled(password.length<=8)
    
  }, [email,password]);

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Insert user email"
      />
      
       <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Insert password"
      />
      
      <button disabled={isDisabled}>Add</button>
    </>
  );
}
