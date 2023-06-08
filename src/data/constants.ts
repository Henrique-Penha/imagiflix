const URL = 'https://api.themoviedb.org/3';
const APIKEY = 'c7cf6be1323eb27f71740ba7bdbdf2ef';
const IMAGE_URL = 'https://image.tmdb.org/t/p';
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose',
};


export default {
    URL,
    APIKEY,
    IMAGE_URL,
    APISTRING,
    EVENTS
}