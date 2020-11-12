import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../models.entity/album/album';
import { Data } from '../models.entity/Data/data';
import { Song } from '../models.entity/song/song';
import { SongService } from '../models.service/songService/song.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  tracksForReproduce:Data;
  albumsForReproduce:Album[];//Se Reproducira todo el album al presionar alguna cancion
  albumId:number=21;
  nextPage:string;
  previousPage:string;
  searchOption:number = 1;//1 para buscar por Album, 2 para buscar por Cancion

  @Output()
  propagar = new EventEmitter<any>(); 

  constructor( private songService:SongService){
  }

  ngOnInit(){
    this.topTenChart();
  }

  topTenChart(){
    this.songService.topTenChart()
      .subscribe(data => this.tracksForReproduce = data.tracks);
  }

  Buscar(wordToSearch:String){
    switch(this.searchOption){
      case 1:
          this.getByAlbum(wordToSearch);
         break;
      case 2:
        this.getBySong(wordToSearch);
        break;
    }
  }

  getByAlbum(albumToSearch:String){
    let data = null;
    console.log("antes de hacer el pedido de albums");
    this.songService.getTracksByAlbum(albumToSearch)
      .subscribe(
        (Data) => {
            this.tracksForReproduce = Data;
          },
          error=>console.log('Error en pedido')
        ); 
  }

  getAnotherPageTenAlbums(url:string){
    this.songService.getTracksByUrl(url)
      .subscribe(
        (Data) => {
            this.tracksForReproduce = Data;
          },
          error=>console.log('Error en pedido')
        ); 
  }
  
  getBySong(songToSearch:String){
    this.songService.getBySong(songToSearch)
      .subscribe(Data => this.tracksForReproduce = Data); 
  }
  
  getByArtistAndAlbum(albumToSearch:String, artistToSearch:String, limit:number){
    this.songService.getTracksByArtistAndAlbum(artistToSearch, albumToSearch, limit)
      .subscribe(Data => this.tracksForReproduce = Data); 
  }
  reproducirCancion(track:Song){
    let data:Data = new Data();
    data.data = [];
    data.data.push(track);
    this.propagar.emit(data);
  }
}
