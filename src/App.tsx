import './App.css'
import Welcome from "./pages/Welcome.tsx";
import { Route, Routes } from 'react-router-dom';
import CharacterPage from "./pages/CharacterPage.tsx";
import NavBar from "./components/NavBar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import CharacterCreator from "./components/CharacterCreator.tsx";
import {characters} from "./Characters.ts";

export default function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}></Route>
                <Route path={"/characters"} element={<CharacterPage characters={characters}/>}></Route>
                <Route path={"/create"} element={<CharacterCreator characters={characters}/>}></Route>
                <Route path={"/character/:id"} element={<CharacterDetailCard characters={characters}/>}></Route>
            </Routes>
        </>
    );
}
