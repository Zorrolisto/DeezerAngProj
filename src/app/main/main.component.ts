import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Album } from '../models.entity/album/album';
import { Data } from '../models.entity/Data/data';
import { Song } from '../models.entity/song/song';
import { SongService } from '../models.service/songService/song.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges{
  songsForReproduce:Data;
  albumsForReproduce:Album[];
  albumId:number=21;
  nextPage:string;
  previousPage:string;
  @Input() searchOption:number;
  @Output()
  spread = new EventEmitter<any>(); 

  constructor( private songService:SongService){}

  ngOnInit(){
    this.topTenChart();
  }
  ngOnChanges(){
    if(this.searchOption==1){
      this.topTenChart();
    }else{
      this.songsForReproduce=null;
    }
  }

  topTenChart(){
    this.songService.topTenChart()
      .subscribe(data => this.songsForReproduce = data.tracks);
  }

  Search(wordToSearch:String){
    switch(this.searchOption){
      case 1:
          this.getBySong(wordToSearch);
         break;
      case 2:
          this.getByAlbum(wordToSearch);
         break;
      case 3:
        this.getBySong(wordToSearch);
        break;
    }
  }

  getByAlbum(albumToSearch:String){
    console.log("antes de hacer el pedido de albums");
    this.songService.getTracksByAlbum(albumToSearch)
      .subscribe(
        (Data) => {
            this.songsForReproduce = Data;
          },
          error=>console.log('Error en pedido')
        ); 
  }

  getAnotherPageTenAlbums(url:string){
    this.songService.getTracksByUrl(url)
      .subscribe(
        (Data) => {
            this.songsForReproduce = Data;
          },
          error=>console.log('Error en pedido')
        ); 
  }
  
  getBySong(songToSearch:String){
    this.songService.getBySong(songToSearch)
      .subscribe(Data => this.songsForReproduce = Data); 
  }

  reproduceAlbum(SongsOfAlbum:any){
    console.log(SongsOfAlbum);
    this.spread.emit(SongsOfAlbum);
  }
  reproduceSong(track:Song){
    let data:Data = new Data();
    data.data = [];
    data.data.push(track);
    this.spread.emit(data);
  }
}
