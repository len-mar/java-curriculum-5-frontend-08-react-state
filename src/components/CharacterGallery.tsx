import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {CharacterListProps} from "../pages/CharacterPage.tsx";


export default function CharacterGallery(props: Readonly<CharacterListProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.name} character={character}/>);
    return (
        <div className="character-gallery">
            {cards}
        </div>
    );
}
