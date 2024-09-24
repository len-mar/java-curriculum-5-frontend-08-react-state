import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {Link} from "react-router-dom";

export type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {
    // todo: Step 2: Create another route that navigates to the "CharacterDetailCard" component on the path "/characters/:id".
    //  The CharacterDetailCard should receive a list of all characters as a prop, and based on the ID, the correct character should be selected and displayed.
    return (
        <Link to={"/character/" + props.character.id}>
            <div className="character-card">
                <img src={props.character.image} alt={props.character.name}/>
                <div className="character-card-info">
                    <h3>{props.character.name}</h3>
                    <p>Species: {props.character.species}</p>
                    <p>Status: {props.character.status}</p>
                </div>
            </div>
        </Link>

    );
}
