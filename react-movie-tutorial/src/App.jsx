import "./css/App.css"
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

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
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
