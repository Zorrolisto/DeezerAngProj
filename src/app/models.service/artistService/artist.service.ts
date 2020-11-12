import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from 'src/app/models.entity/artist/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private url:string = '/artist';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getNumberOfFans(artistId:string):Observable<Artist>{
    return this.http.get<Artist>(`${this.url}/${artistId}`);
  }

}
