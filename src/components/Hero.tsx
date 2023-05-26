import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import placeholder from "../assets/hero.jpg";
import Score from './Score';
import CONST from '../data/constants';

interface heroProps {
  title: string;
  score: number;
  image: string;
}

const Hero = ({ title, score, image }: heroProps) => {
  const { IMAGE_URL } = CONST;

  return (
    <header className="relative box-border -mb-32">
      <img
        className="object-cover object-center h-full w-full"
        src={image ? `${IMAGE_URL}/original/${image}`: placeholder}
        alt={title}
      />
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
      <article className="absolute bottom-0 mb-64 px-8">
        <p className="text-3xl">Assista agora:</p>
        <h2 className="text-6xl font-bold"> {title} </h2>
        
        <p className="text-base">
          Nota{" "}
          <Score value={score}/>
        </p>

        <button className="text-base py-2 px-8 mr-2 mt-5 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Assistir
        </button>

        <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Minha lista
        </button>
      </article>
    </header>
  );
};

export default Hero;
