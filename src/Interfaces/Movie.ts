export interface Movie {
    id?: number | string;
    title: string;
    cover: string;
    score?: number;
    poster_path?: string;
    vote_average?: number;
    name?: string;
}