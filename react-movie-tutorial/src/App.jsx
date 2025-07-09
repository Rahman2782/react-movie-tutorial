import "./App.css"
import Home from "./pages/Home";

// //components return HTML
// export default function App() { //components start with a capital letter
//   return ( 
//     <>
//       <Text display={"whats up"}/>
//       <Text display={"gurt"}/>
//     </> //only one parent element can be returned unless fragments are used
//   )
// }

// function Text({display}) {
//   return (
//     <div>
//       <p>{display}</p>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
