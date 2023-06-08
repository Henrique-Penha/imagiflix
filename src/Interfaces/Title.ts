export enum TitleType {
    Movie = 'movie',
    Serie = 'tv' 
}

export interface Title {
    type: TitleType;
    id: number | string;
}