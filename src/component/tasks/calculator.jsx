import React from "react"
import "./calculator.css"
class Calculator extends React.Component{
    state={
        input:""
    }
    add=(val)=>{
        this.setState({input:this.state.input+val})
    }
    render(){
        
        return(
             <div className="calculator">
            <div className="card">
                <div className="input">
                <input type="text" className="dispaly" value={this.state.input}  disabled></input> 
                </div>
                 <div className="button">
                <button>Ac</button>
                <button>DEL</button>
                <button onClick={()=>this.add("1")}>1</button>
                <button onClick={()=>this.add("2")}>2</button>
                <button onClick={()=>this.add("3")}>3</button>
                <button>+</button>
                <button onClick={()=>this.add("4")}>4</button>
                <button onClick={()=>this.add("5")}>5</button>
                <button onClick={()=>this.add("6")}>6</button>
                <button onClick={}>-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
                <button>/</button>
                <button>0</button>
                <button>=</button>
                </div>  
            </div>
            </div>
        )
    }
}
export default Calculator