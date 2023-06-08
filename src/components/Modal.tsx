import Score from './Score';
import emitter from '../util/eventEmitter';
import CONST from '../data/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
    
    const Modal = ({
        poster_path,
        title,
        original_title,
        name,
        original_name,
        overview,
        vote_average,
        runtime,
        number_of_seasons,
        }: any) => {
            const { IMAGE_URL } = CONST;

            const handleClick = () => {
                emitter.emit(CONST.EVENTS.ModalClose);
            };

            return(
                <div className='fixed top-0 z-10 p-12 w-full h-screen grid place-items-center'>
                    <article className='grid grid-cols-2 p-8 bg-black shadow-lg opacity-90'>
                        <img 
                        className='w-4/5 h-[80vh]'
                        src={`${IMAGE_URL}/w500/${poster_path}`}
                        alt={title ? title : name}
                        />
                        <div>
                            <h2 className='text-3x1 font-bold flex items-center justify-between'>
                                <span className='block'>
                                    {title ? title : name}
                                </span>

                                <FontAwesomeIcon 
                                className='cursor-pointer top-0 right-0 text-red-600'
                                icon={faTimesCircle}
                                size='1x'
                                onClick={handleClick}
                                />
                            </h2>
                            <h6 className='font-bold italic'>
                                {original_title ? original_title : original_name}
                            </h6>
                            <p className='my-8'>{overview}</p>
                            <Score value={vote_average} />
                            <span className='bg-red-600 rounded py-2 px-4 ml-2'>
                                {runtime ? `${runtime}min` : `${number_of_seasons} temporada`}
                            </span>
                        </div>
                    </article>
                </div>
            );
        };

export default Modal;