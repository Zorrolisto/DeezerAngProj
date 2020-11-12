import { Artist } from '../artist/artist';
import { Data } from '../Data/data';
import { Genre } from '../genre/genre';

export class Album {
    id:number;
    title:string;
    cover_medium:string;
    cover_xl:string;
    genres:Genre[];
    tracks:Data;
    artist:Artist;
}
