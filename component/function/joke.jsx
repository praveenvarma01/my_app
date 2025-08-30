import { useState, useEffect } from "react";
import "./joke.css";

function Joke() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1>😂 Random Joke Generator</h1>

      {joke ? (
        <div className="joke-card">
          <p className="setup">{joke.setup}</p>
          <p className="punchline">{joke.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default Joke;



// import { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);
 
  

// useEffect(() => {
//   console.log("Effect runs with count:", count);
// }, [count]);
//  console.log(count);

//   return (
//     <div>
//       <h2>Seconds: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>incre</button>
//       <button onClick={() => setCount(count - 1)}>decre</button>
//     </div>
//   );
// }
// export default Timer


