import CharacterCard from "./CharacterCard.tsx";
import {characters} from "../Characters.ts";
import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";

// fixme: which props? how to get the character? list? this is not working
// no route available for "/character/4"
export default function CharacterDetailCard(){
    const param = useParams()
    const id = param.id
    const char:Character[] = characters.filter((character) => character.id.toString() === id)
    return <>
    <h2>character detail card</h2>
        <CharacterCard character={char[0]}></CharacterCard>
    </>
}