// import React { Component } from "react";
// class Counter extends Component{
//     constructor(props){
//         console.log("constructor method is called")
//         super(props)
//          this.state={
//             count:0
//      }
//     }



 
//     componentDidMount(){
//         console.log("mount method is called")
//     }

//     componentDidUpdate(){
//         console.log("update method is called")
//     }

//     componentWillUnmount(){
//         console.log("unmount method is called")
//     }

//     incre=()=>{
//     this.setState({
//           count:this.state.count + 1
//         })
//     }
//     decre=()=>{
//         this.setState({
//             count:this.state.count - 1
//         })
//     }

//     render(){
//         const {count}=this.state
//         console.log("render method is called")
//         return(
//             <div>
//                 <h2>Counter</h2>
//                 <p>{count}</p>
//                 <button onClick={this.incre}>+</button>
//                 <button onClick={this.decre}>-</button>
//             </div>
//         )
//     }
// }
// export default Counter

//DIGITAL CLOCK
import { Component } from "react"
import "./clock.css"

class Clock extends Component{
    state={
        time:new Date()
    }
    componentDidMount(){
        this.Clock=setInterval(()=>{
        this.setState({
            time:new Date()
        })
        },1000)
    }

    render(){
        // console.log(this.state.time.toLocaleTimeString())
        const{time}=this.state
        return(
            <div className="card">
            <h1 className="head">Digital Clock</h1>
            <p className="para">{time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export  default Clock 