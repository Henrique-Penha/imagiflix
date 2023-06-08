import { Movie } from '../Interfaces/Movie';
import Slider, { Settings } from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Poster from './Poster';
import CONST from '../data/constants';
import './Carousel.css';


enum Direction {
    left, 
    rigth,
}

const StickArrow = ({ direction, onClick }: {direction: Direction; onClick?: () => void}) => (
    <button type='button' className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 
    ${direction ? 'right-0' : 'left-0'
    }`} onClick={onClick}>
        <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='3x' color='#fff'/>
    </button>
)


interface CarouselProps {
    title: string;
    data?: Movie[];
}

const Carousel = ({ title, data }: CarouselProps ) => {
    const { IMAGE_URL } = CONST;

    const settings: Settings = {
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <StickArrow direction={Direction.left} />,
        nextArrow: <StickArrow direction={Direction.rigth} />,
    };

    const getCover = (cover?:string) => {
        if(cover) {
           return `${IMAGE_URL}/w200/${cover}`;
        }

        return '';
    } 


    return (
        <section className='carousel'>
            <h2 className='relative z-10 font-bold text-2x1 ml-8 mb-4'>{title}</h2>
           
            <Slider className='relative mb-8' {...settings}>
                {data?.map((movie, index) => <Poster 
                 title={movie.title} 
                 cover={getCover(movie?.poster_path)} 
                 score={movie.vote_average}
                 name={movie.name}
                 key={index}
                 id={movie.id}
                 />)}
            </Slider>
        </section>
    )
}

export default Carousel;