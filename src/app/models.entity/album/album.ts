import { Artist } from '../artist/artist';
import { Data } from '../Data/data';
import { Genre } from '../genre/genre';

export class Album {
    title:string;
    cover_medium:string;
    genres:Genre[];
    tracks:Data;
    artist:Artist;
}
