import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Album } from 'src/app/models.entity/album/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private url:string = 'https://api.deezer.com/album';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAlbum(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.url}/${id}`);
  }
}
