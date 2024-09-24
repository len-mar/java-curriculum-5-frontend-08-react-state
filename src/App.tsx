import './App.css'
import Welcome from "./pages/Welcome.tsx";
import { Route, Routes } from 'react-router-dom';
import CharacterPage from "./pages/CharacterPage.tsx";
import NavBar from "./components/NavBar.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";

export default function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}></Route>
                <Route path={"/characters"} element={<CharacterPage/>}></Route>
                <Route path={"/characters/:id"} element={<CharacterDetailCard/>}></Route>
            </Routes>
        </>
    );
}
