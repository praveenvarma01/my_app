import React, { Component } from "react";
import "./stop.css"
class Stopwatch extends Component{
      state={
            time:0
        }
        start=()=>{
        this.mytime=setInterval(()=>{
            this.setState({time:this.state.time+1})

        },1000)
    }
    stop=()=>{
        clearInterval(this.mytime)
    }
    reset=()=>{
        clearInterval(this.mytime)
        this.setState({time:0})
    }
            
    render(){
        const {time}=this.state
        const minutes=Math.floor(time/60)  // calculates the mts eg:75/60=1.25--->so,1 minute
        const seconds=time%60             //75%60=remainder-->15--so,15 seconds

      
        return(
        <div className="bg">
            <div className="card">
                <h2> ⌚My Timer</h2>
                <p>{minutes}:{seconds<10?"0"+seconds:seconds}</p>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        </div>
        )
    }
}
export default Stopwatch;