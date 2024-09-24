import CharacterCard from "./CharacterCard.tsx";
import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {CharacterListProps} from "../pages/CharacterPage.tsx";

// FIXME: after creating a new character, the detail card via click doesn't work, characters doesn't seem to be passed properly
export default function CharacterDetailCard(props:Readonly<CharacterListProps>){
    const param = useParams()
    const id = param.id
    const char:Character[] = props.characters.filter((character:Character) => character.id.toString() === id)
    return <>
    <h2>character detail card</h2>
        <CharacterCard character={char[0]}></CharacterCard>
    </>
}