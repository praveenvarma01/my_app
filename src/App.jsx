// import Studentcard from "./components/props/index.jsx"
// import buttons from "./components/props/button.jsx"
// function App() {
//   function handleClick(name) {
//     alert(`${name} button clicked`);
//   }
//   return (
//        <div>
//         <Studentcard name="praveen" age={23} from="hyderabad" is_student={true}/> 
//         <buttons label="click praveen" color="red" onclick={()=>handleClick("praveen")}/>
//          {/* if it is integer define in {}  props are objects--conevertion of data from one component to another*/}
//       {/* <Studentcard/> */}
//       <hr></hr>
//       < Studentcard name="Reetu" age={23} from="warangal" is_student={false}/>
//         </div>
   
  
    
//   )
// }

//BY USING FUNCTION COMPONENT***
// import React from "react";
// import Studentcard  from "./components/props/index.jsx";
// const data=[
//   {
//     id:1,
//     name:"varma",
//     age:23,
//     from:"mancherial",
//     is_student:true
//   },
//    {
//     id:2,
//     name:"Reetu",
//     age:24,
//     from:"khammam",
//     is_student:false
//   },
//  {
//     id:3,
//     name:"teju",
//     age:21,
//     from:"hyderabad",
//     is_student:true
//   },
//   {
//     id:4,
//     name:"madhu",
//     age:23,
//     from:"warangal",
//     is_student:false
//   },{
//     id:5,
//     name:"deepu",
//     age:23,
//     from : "vizag",
//     is_student:true
//   },
//   {
//     id:6,
//     name:"Ravi kiran",
//     age:24,
//     from:"ongole",
//     is_student:false
//   }
// ]
// function App(){
//   return(
//     <div>
// <ul>
//   {
//     data.map((val)=>(
//       <li key={val.id}>
//           <Studentcard 
//           name={val.name}
//           age={val.age}
//           from={val.from}
//           is_student={val.is_student}/>
//       </li>
//     ))
//   }
// </ul>
//     </div>
//   )}
//  export default App;


//BY USING CLASS COMPONENT***

// import Studentcard from "./components/props/index.jsx";
// import { Component } from "react";
// const data=[
//   {
//     id:1,
//     name:"varma",
//     age:23,
//     from:"mancherial",
//     is_student:true
//   },
//    {
//     id:2,
//     name:"Reetu",
//     age:24,
//     from:"khammam",
//     is_student:false
//   },
//  {
//     id:3,
//     name:"teju",
//     age:21,
//     from:"hyderabad",
//     is_student:true
//   },
//   {
//     id:4,
//     name:"madhu",
//     age:23,
//     from:"warangal",
//     is_student:false
//   },{
//     id:5,
//     name:"deepu",
//     age:23,
//     from : "vizag",
//     is_student:true
//   }
//   ]

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <ul>
//           {
//             data.map((val)=>(
//               <li>
//                 <Studentcard
//                 name={val.name}
//                 age={val.age}
//                 is_student={val.is_student}
//                 from={val.from}/>
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }
// export default App

//login & logout buttons

// import { Component } from "react";
// import Login from "./state/counter/index.jsx";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Login/>
//       </div>
//     );
//   }
// }
// export default App;


//COUNTER APP
// import { Component } from "react";
// import Counter from "./state/counter/index.jsx";

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }
// export default App;

//BACKGROUND COLOR CHANGE
// import { Component } from "react";
// import Bgcolor from "./state/counter/index.jsx";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Bgcolor/>
//       </div>
//     )
//   }
// }
// export default App;

//HIDE & SEEK
// import { Component } from "react";
// import Hideseek from "./state/counter/index.jsx";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Hideseek/>
//       </div>
//     )
//   }
// }
// export default App

// // LIFE CYCLE METHODS
// import { Component } from "react";
// import Counter from "./life/cycles/compo.jsx";
// class App extends Component{
//   state={
//     isshow:true
//   }
//   del=()=>{
//     this.setState({
//       isshow:!this.state.isshow
//     })
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.del}>delete</button>
//         {this.state.isshow && <Counter/>}
      
//       </div>
//     )
//   }
// }
// export default App


//DIGITAL CLOCK
// import { Component } from "react";
// import Clock from "./life/cycles/compo.jsx";
// import "./App.css"
// class App extends Component{
//   state={
//     isshow:true
//   }
//   hide=()=>{
//     this.setState({
//       isshow:!this.state.isshow

//     })
//   }
//   render(){
//     const{isshow}=this.state
//     return(
//       <div className="bg">
//         <button className="btn" onClick={this.hide}>{isshow?"hide":"show"}</button>
//         {this.state.isshow && <Clock/>}
        
//       </div>
//     )
//   }
// }
// export default App

// //STOPWATCH
// import { Component } from "react";
// import Stopwatch from "./component/tasks/stopwatch.jsx";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Stopwatch/>
//       </div>
//     )
//   }
// }
// export default App

// //CALCULATOR
// import { Component } from "react";
// import Calculator from "./component/tasks/calculator.jsx";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Calculator/>
//       </div>
//     )
//   }
// }
// export default App


// Onchange --input--functional component
// import TextMirror from "../component/function/onchange";
// function App() {
//   return (
//     <TextMirror />
//   );
// }
// export default App;

//Joke
import Joke from "../component/function/joke";
function App(){
  return(
    <Joke/>
  )
}
export default App


// import Timer from "../component/function/joke";
// function App(){
//   return(
//     <Timer/>
//   )
// }
// export default App