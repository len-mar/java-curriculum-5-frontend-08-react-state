import CharacterCard from "./CharacterCard.tsx";
import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {CharacterListProps} from "../pages/CharacterPage.tsx";
import {useEffect, useState} from "react";

export default function CharacterDetailCard(props: Readonly<CharacterListProps>) {
    const [char, setChar] = useState<Character>()
    const param = useParams()
    // handles possibility of param.id being undefined
    const id: string = param.id ? param.id.toString() : ""

    // todo: why does this dependencies array NOT update infinitely?
    useEffect(() => {
        setChar(props.characters.find((character: Character) => character.id.toString() === id))
    }, [props.characters, id])

    // returns char only when one was found, otherwise, display error message
    return <>
        <h2>character detail card</h2>
        {char ? <CharacterCard character={char}></CharacterCard> : <p>No character found with that id :(</p>}
    </>
}