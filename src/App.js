import ChildComp from './ChildComp';
import './App.css';
import Img from "./assets/img.jpg"
function App() {
  const user={
    name:"angham",
    age:16
  }
  const names=["asma","saoussen","angham","amal"]
const HandleAlert=(name)=>{
  alert(`Hello from ${name}`)
}

  return (
    <div className="App">
     <ChildComp user={user} names={names} HandleAlert={HandleAlert} >
       <h2>children props 1</h2>
       <h2>children props2 </h2>
    <img src={Img} alt="img" />
       </ChildComp>
     
    </div>
  );
}

export default App;
