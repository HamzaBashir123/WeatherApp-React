import { useState } from "react";
import "./App.css";
import WeatherApp from "./Component/Weather/WeatherApp";

function App() {
  // const [show, SetShow]= useState(false)
  // const firstpara = `Programming is an intriguing sector as it gives us the superpower to
  // regulate computer programs on the go. It can be used for ships, traffic
  // control, robotics, self-driving vehicles, smartphone applications,
  // websites, and many other things. To ensure that you remain up to date on
  // standards and protocols, and even more so in the field of coding, it is
  // important to track developments in your field. Programmers of all
  // specialties can easily benefit from keeping track of the new
  // developments & following industry-leading blogs and websites.`;
  // const secondpara =` Programming is an intriguing sector as it gives us the superpower to
  // regulate computer programs on the go. It can be used for ships, traffic
  // control, robotics, self-driving vehicles, smartphone applications,
  // websites, and many other things. These bloggers have made a name for
  // themselves in the programming world by posting important, high-quality
  // data and tips for coders. You can learn tricks and shortcuts you would
  // never have dreamed of doing otherwise by following programming blogs.`

 

  console.log("SAL,A");
  console.log("SAL,A");
  console.log("SAL,A");
  console.log("SAL,A");
  console.log("SAL,A");
  console.log("SAL,A");

  return (
    // <div className="App"> 
    //   {/* <WeatherApp/> */}
    //   <p className="first">
        
    //   {show?firstpara.split(' ').slice(0,20).join(' ')+"... " : firstpara }<span style={{color:'blue', cursor:'pointer' }} onClick={() => SetShow(!show)}> {show  ?  " showmore " : "  showless" }</span>
    //   </p>
    // </div>
    <WeatherApp/>
  );
}

export default App;


