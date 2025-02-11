import Card from "./assets/components/Card"
import Button from "./assets/components/Button"

import Footer from "./assets/components/Footer"
import Gallery from "./assets/components/Gallery"

export default App;

function App() {
  return (
    <div className="coolDiv">
        <Button />
      <h2>THis is my first react application</h2>
      <p>I can keep adding more tags!!!</p>
      <Card />
    
      <div>
        <h2>This is my gallery app!!!</h2>
        <Gallery />
      </div> 
      <Footer /> 
    </div>
  )
}
// function App() {
//   return (
//     <>
//       <div>
//         <h1>Hello, world!</h1>
//       </div>
//     </>
//   );
// }