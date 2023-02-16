import './App.css';
import AppNavigation from "./components/AppNavigation";
import Crew from './components/Crew';
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import Moon from "./components/Destination/Moon";
import Mars from "./components/Destination/Mars";
import Europa from "./components/Destination/Europa";
import Titan from "./components/Destination/Titan";

export default function App() {

    const backgroundImg = {
        home : "background-home-desktop.jpg",
        destination : "background-destination=desktop.jpg",
        crew: "background-crew-desktop.jpg",
        technology: "background-technology-desktop.jpg"
    }

  return (
      <>
          <BrowserRouter>
            <header>
                <AppNavigation/>
            </header>
            <main>
                <Routes>
                    <Route exact path ="/home" element={<Home bkGrd = {backgroundImg}/>} />
                    <Route  exact path ="/crew" element={<Crew/>} />
                    <Route exact path ="/destination" element={<Destination/>} >
                        <Route exact path ="moon" element = {<Moon/>}/>
                        <Route exact path ="mars" element = {<Mars/>}/>
                        <Route exact path ="europa" element = {<Europa/>}/>
                        <Route exact path ="titan" element = {<Titan/>}/>
                    </Route>
                    <Route exact path ="/technology" element={<Technology/>} />
                    {/*<Route path ="*" element={<Navigate to="/home"/>} />*/}
                </Routes>
            </main>
          </BrowserRouter>
      </>
  );
}
