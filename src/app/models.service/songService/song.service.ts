import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Data } from 'src/app/models.entity/Data/data';
import { Tracks } from 'src/app/models.entity/tracksChart/tracks';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private url:string = 'https://api.deezer.com/search?q=';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getTracksByAlbum(nameAlbum:String):Observable<Data>{
    return this.http.get<Data>(`${this.url}album:"${nameAlbum}"&index=0&limit=10`);
  }

  getTracksByUrl(url:string):Observable<Data>{
    return this.http.get<Data>(url);
  }

  getTracksByArtistAndAlbum(nameArtist:String, nameAlbum:String, totalOfSongs:number):Observable<Data>{
    return this.http.get<Data>(`${this.url}album:"${nameAlbum}",artist:"${nameArtist}"&index=0,&limit=${totalOfSongs}`);
  }

  getBySong(nameTrack:String):Observable<Data>{
    return this.http.get<Data>(`${this.url}track:"${nameTrack}"`);
  }
  
  topTenChart():Observable<Tracks>{
    return this.http.get<Tracks>("https://api.deezer.com/chart/0?index=0&limit=10");
  }
}
