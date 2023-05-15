import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import placeholderUser from '../assets/user.jpg';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
            <div className="">
                <h1 className='hidden'>Imagiflix</h1>
                <img src={placeholderUser} alt="Imagiflix" />
                <ul>
                    <li className='font-bold'>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                </ul>
            </div>

            <div className="justify-self-end justify-items-end">
                <form className='relative w-64'>
                    <input className='w-full text-white bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100' type='text' placeholder='Títulos, gente e gêneros' />
                    <button className='search absolute right-0 py-1 px-2 text-white'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;