import { Album } from '../album/album';
import { Artist } from '../artist/artist';

export class Song {
    title:string;
    artist:Artist;
    preview:string;
    album:Album;
}
