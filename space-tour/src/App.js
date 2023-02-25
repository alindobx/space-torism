import './App.css';
import AppNavigation from "./components/AppNavigation";
import Crew from './components/Crew';
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Home from "./components/Home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Moon from "./components/Destination/Moon";
import Mars from "./components/Destination/Mars";
import Europa from "./components/Destination/Europa";
import Titan from "./components/Destination/Titan";
import Commander from "./components/Crew/Commander";
import Flight_Engineer from "./components/Crew/Flight_Engineer";
import Mission_Specialist from "./components/Crew/Mission_Specialist";
import Pilot from "./components/Crew/Pilot";
import LaunchVehicle from "./components/Technology/LaunchVehicle";
import SpaceCapsule from "./components/Technology/SpaceCapsule";
import SpacePort from "./components/Technology/SpacePort";

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
            <main className="main-crew">
                <Routes>
                    <Route exact path ="/home" element={<Home/>} />
                    <Route path ="/" element={<Navigate to="/home" replace/>} />
                    <Route  path ="/crew" element={<Crew/>}>
                        <Route exact path ="commander" element = {<Commander/>}/>
                        <Route exact path ="mission_specialist" element = {<Mission_Specialist/>}/>
                        <Route exact path ="pilot" element = {<Pilot/>}/>
                        <Route exact path ="flight_engineer" element = {<Flight_Engineer/>}/>
                    </Route>
                    <Route exact path ="/destination" element={<Destination/>} >
                        <Route exact path ="moon" element = {<Moon/>}/>
                        <Route exact path ="mars" element = {<Mars/>}/>
                        <Route exact path ="europa" element = {<Europa/>}/>
                        <Route exact path ="titan" element = {<Titan/>}/>
                    </Route>
                    <Route exact path ="/technology" element={<Technology/>}>
                        <Route exact path ="launch_vehicle" element = {<LaunchVehicle/>}/>
                        <Route exact path ="spaceport" element = {<SpaceCapsule/>}/>
                        <Route exact path ="space_capsule" element = {<SpacePort/>}/>
                    </Route>
                </Routes>
            </main>
          </BrowserRouter>
      </>
  );
}
