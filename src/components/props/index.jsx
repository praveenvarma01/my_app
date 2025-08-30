//BY USING FUNCTION-COMPONENT***
// import React from "react";
// function Studentcard({name,age,is_student,from}){

//     console.log(name,age,is_student,from)
//     return( 
//         <div>
//             {/* <h1>name=praveen varma</h1>
//             <h2>age=23</h2> */}
//              <h2 id="hlo">Name: {name}</h2>
//             <h3 id="age">Age: {age}</h3>
//              <h3 id="from">from: {from}</h3>
//             <h3 style={{color:is_student?"green":"red"}}>is_student: {is_student?"yes":"No"}</h3> {/*it won't print boolean values directly so use ternary operator*/ }
//              <hr/>
//         </div>
//     )
// }
// export default Studentcard;


//BY USING CLASS-COMPONENT***
import React  from "react";

class Studentcard extends React.Component{
  render(){
    return(
        <div>
        <h2>Name:{this.props.name}</h2>
        <h3>Age:{this.props.age}</h3>
        <h3>is_student:{this.props.is_student?"yes":"No"}</h3>
        <h3>From:{this.props.from}</h3>
        </div>
    )
  }
}
export default Studentcard

