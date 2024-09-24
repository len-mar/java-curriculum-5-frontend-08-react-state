import {useState} from "react";
import {characters} from "../Characters.ts";
import {useNavigate} from "react-router-dom";


export default function CharacterCreator() {
    const [nameInput, setNameInput] = useState<string>("")
    const [speciesInput, setSpeciesInput] = useState<string>("")
    const [statusInput, setStatusInput] = useState<string>("")
    const navigate = useNavigate()

    /* type SmallCharacter = {
        name:string,
        species:string,
        status:string
    }
    */
    
    function handleOnChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        setNameInput(event.target.value)
    }

    function handleOnChangeSpecies(event: React.ChangeEvent<HTMLInputElement>) {
        setSpeciesInput(event.target.value)
    }

    function handleOnChangeStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatusInput(event.target.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // prevents reload
        event.preventDefault()

        if (nameInput.length !== 0 && speciesInput.length !== 0 && statusInput.length !== 0) {
            characters.push({name: nameInput, species: speciesInput, status: statusInput})
            setNameInput("")
            setSpeciesInput("")
            setStatusInput("")
        }
        navigate("/characters")
    }

    return <>
        <h2>create new character</h2>
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            <input id={"name"} onChange={handleOnChangeName}/>

            <label>species:</label>
            <input id={"species"} onChange={handleOnChangeSpecies}/>

            <label>status:</label>
            <input id={"status"} onChange={handleOnChangeStatus}/>
            <button>Submit</button>
        </form>
    </>
}