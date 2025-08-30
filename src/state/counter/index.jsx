// //Login && Logout buttons
// import React from "react";

// class Login extends React.Component {
//   state = {
//   log: "",
//   isLoggedIn:false,
//   start:"pls login"
//   };
//   toggleLogin=()=>{
//    if(this.state.isLoggedIn){
//     this.setState({
//        log:"Thank you..you're logged out",
//        isLoggedIn:false,
//        start:"Login Again"   
//    })
//    }
//     else{
//      this.setState({
//         log:"successfully logined",
//         isLoggedIn:true,
//         start:"click here to logout",    
//      })
//     }
//    }
//     render() {
//         const makeover={
//             backgroundColor:this.state.isLoggedIn ? "red" : "green",
//             color: "white",
//             padding : "10px 20px",
//             cursor: "pointer",
//             fontSize: "15px",
//         }
//     return (
//       <div>
//         <h2 style={{color:"blue"}}>{this.state.log}</h2>
//         <h3 style={{color:"purple"}}>{this.state.start}</h3>
//         <button style={makeover} onClick={this.toggleLogin}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
       
       
//       </div>
//     );
//   }
// }
// export default Login;


//COUNTER APP
// import React from "react";
// import "./counter.css"

// class Counter extends React.Component{
//   state={
//     count:0
//   }
//   incre=()=>{
//    this.setState({count:this.state.count + 1})
//   }
//   decre=()=>{
//     if(this.state.count>0){
//     this.setState({count:this.state.count - 1 })
//     }
//   }
//   reset=()=>{
//     this.setState({count:0})
//   }
//   render(){
//     return(
//       <div className="bg">
//         <div className="card">
//           <h2>Counter</h2>
//           <p>{this.state.count}</p>
//           <button onClick={this.incre}>Increment</button>
//           <button onClick={this.decre}>Decrement</button>
//           <button onClick={this.reset}>Reset</button>
//         </div>
//       </div>
//     )
//   }
// }
// export default Counter


//BACKGROUND COLOR CHANGE
// import React from "react";
// import "./counter.css"
// class Bgcolor extends React.Component{
//   state={
//     color:"white"
//   }
//   red=()=>{
//     this.setState({color:this.state.color="red"})
//   }
//   black=()=>{
//     this.setState({color:this.state.color="black"})
//   }
//   yellow=()=>{
//     this.setState({color:this.state.color="yellow"})
//   }
//   purple=()=>{
//     this.setState({color:this.state.color="purple"})
//   }
//   green=()=>{
//     this.setState({color:this.state.color="green"})
//   }
//   render(){
//     return(
//       <div className="bg" style={{backgroundColor:this.state.color,minHeight:"100vh",width:"1500px"}}>
//         <div className="card">
//         <h2>Click the buttons to change colors</h2>
//         <button onClick={this.red}>red</button>
//         <button onClick={this.black}>black</button>
//         <button onClick={this.yellow}>yellow</button>
//         <button onClick={this.purple}>purple</button>
//         <button onClick={this.green}>green</button>
//       </div>
//       </div>
//     )
//   }
// }
// export default Bgcolor

//HIDE $ SEEK
import React from "react";
import "./counter.css"
class Hideseek extends React.Component{
  state={
   users:[]
  }
    allUsers = [
    { name: "John", job: "Software Developer" },
    { name: "Jane", job: "UX Designer" },
    { name: "Peter", job: "Project Manager" },
    { name: "Sarah", job: "Data Scientist" },
  ];
  show=()=>{
    this.setState({users:this.allUsers})
    // this.setState({name:this.state.name="john"})
    // this.setState({info:this.state.info="software Developer"})
  }
  hide=()=>{
    this.setState({users:[]})
    // this.setState({name:""})
    // this.setState({info:""})
   
  }
  render(){
    return(
      <div className="bg">
        <div className="btn">
        <button onClick={this.show}>show</button>
        <button onClick={this.hide}>Hide</button>
        </div>
        <div className="card">
          {this.state.users.map((user,ind)=>(
          <div key={ind}>
           <h2>{user.name}</h2>
          <h2>{user.job}</h2>
          </div>
          ))}
        
      </div>
      </div>
    )
  }
}
export default Hideseek