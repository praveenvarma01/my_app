// import { useState } from "react";

// function Login(){
//     const[username,setUsername]=useState("")
//     const[password,setPassword]=useState("")
//     const[isshow,setisshow]=useState(false) 
//      const onText=(event)=>{
//         setUsername(event.target.value)
//     }
//     const onPass=(event)=>{
//         setPassword(event.target.value)
//     }
//     const check=(event)=>{
//         setisshow(event.target.checked)
//     }
//     return(
//         <div>
//             <input type="text" placeholder="enter username" onChange={onText} value={username}/>
//             <input type={isshow?"text":"password"} placeholder="enter password" onChange={onPass} value={password}/>
//             <input type="checkbox" onChange={check}/>
//             <button>submit</button>
//             <p>{username}</p>
//             <p>{password}</p>
//         </div>
//     )
// }
// export default Login

import { useState } from "react";
import "./onchange.css"; // import the css

function TextMirror() {
  const [text, setText] = useState(""); 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  // Handlers
  const handleChange = (event) =>{
    setText(event.target.value.toUpperCase());}

  const handleName = (event) =>{
   setName(event.target.value);}

  const handlePass = (event) => {
    setPassword(event.target.value);}

  const toggleCheck = () =>{
    setCheck(!check);}

  const clearText = () => {
    setText("");
    setName("");
    setPassword("");
    setCheck(false);
  };

  // Word count
  const wordCount = text.split(" ").filter((word) => word !== "").length;

  // Password strength
  const getStrength = () => {
    if (password.length === 0) return { label: "", color: "" };
    else if (password.length < 4) return { label: "Weak", color: "red" };
    else if (password.length < 8) return { label: "Medium", color: "orange" };
    else return { label: "Strong", color: "green" };
  };

  const strength = getStrength();

  return (
    <div className="container">
      <h2 className="title">🔹 React Practice Tasks</h2>

      {/* Text Mirror Section */}
      <div className="section">
        <h3>Text Mirror</h3>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
        />
        <p>You typed: <strong>{text}</strong></p>
        <p>Characters: {text.length}</p>
        <p>Words: {wordCount}</p>
      </div>

      {/* Greeting Section */}
      <div className="section">
        <h3>Live Greeting</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />
        <p>{name ? `Hello, ${name}! 👋` : "Start typing your name..."}</p>
      </div>

      {/* Password Section */}
      <div className="section">
        <h3>Password Strength Checker</h3>
        <input
          type={check ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={handlePass}
        />
        <label>
          <input
            type="checkbox"
            checked={check}
            onChange={toggleCheck}
          /> Show Password
        </label>
        <p>
          Password strength:
          <span style={{ color: strength.color }}>{strength.label}</span>
        </p>
      </div>

      <button className="clear-btn" onClick={clearText}>Clear All</button>
    </div>
  );
}

export default TextMirror;
