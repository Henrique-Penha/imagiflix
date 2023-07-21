import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Movie } from "../Interfaces/Movie";
import Score from "./Score";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import emitter from '../util/eventEmitter';
import CONST from '../data/constants';
import { TitleType } from "../Interfaces/Title";

import './Poster.css';

interface posterProps extends Movie {
    key: number
}

const Poster = ({ title, name, cover, score, id, key }: posterProps) => {
    const handleClick = () => {
        const type = title ? TitleType.Movie : TitleType.Serie;
        emitter.emit(CONST.EVENTS.PosterClick, { type, id });
      };
    
    return (
        <article className="relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10"
        key={key}
        onClick={handleClick}>
            <img src={cover} alt={title ? title : name} />

            <div className="poster cursor-pointer absolute inset-0 w-full h-full px-3 py-8 grid place-items-center text-center leading-6 bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <h2 className="text-2xl">{title ? title : name}</h2>
                <Score value={score} />
            </div>
        </article>
    )
}

export default Poster;