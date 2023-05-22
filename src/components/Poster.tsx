import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Movie } from "../Interfaces/Movie";
import Score from "./Score";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import './Poster.css';

interface posterProps extends Movie {
    key: number
}

const Poster = ({ title, cover, key }: posterProps) => {
    return (
        <article className="relative transition-all duration-500 ease-in-out transform hover:scale-110 hover:z-10" key={key}>
            <img src={cover} alt={title} />

            <div className="poster cursor-pointer absolute inset-0 w-full h-full px-3 py-8 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <h2 className="text-2xl">{title}</h2>
                <Score value={2} />
            </div>
        </article>
    )
}

export default Poster;