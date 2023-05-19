import { Movie } from "../Interfaces/Movie";

interface posterProps {
    movie: Movie,
    index: number
}

const Poster = ({ movie, index }: posterProps) => {
    return (
        <article key={index}>
            <img src={movie.cover} alt={movie.title} />
        </article>
    )
}

export default Poster;