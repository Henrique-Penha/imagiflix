import { Movie } from '../Interfaces/Movie';
import Slider from "react-slick";


const Poster = ({ cover, title }: Movie, index: number) => {
    return (
        <article key={index}>
            <img src={cover} alt={title} />
        </article>
    )
}


interface CarouselProps {
    title: string;
    data?: Movie[];
}

const Carousel = ({ title, data }: CarouselProps ) => {
    const setting = {
        infinte: true,
        sliderToScroll: 1,
        variableWidth: true
    };


    return (
        <section>
            <h2>{title}</h2>

            <Slider {...setting}>
                {data?.map((movie, index) => Poster(movie, index))}
            </Slider>
        </section>
    )
}

export default Carousel;