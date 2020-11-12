import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Data } from 'src/app/models.entity/Data/data';
import { Song } from 'src/app/models.entity/song/song';

@Component({
  selector: 'app-songs-display',
  templateUrl: './songs-display.component.html',
  styleUrls: ['./songs-display.component.css']
})
export class SongsDisplayComponent implements OnChanges{
  @Output()
  spread = new EventEmitter<any>(); 
  @Output()
  spreadSong = new EventEmitter<any>(); 
  @Output()
  spreadSongsOfAlbum = new EventEmitter<any>(); 
  @Input() songsForReproduce:Data;
  @Input() searchOption:number;
  searchTitle:String;
  resultsTitle:String;

  getAnotherPageTenAlbums(url:string){
    this.spread.emit(url);
  }

  ngOnChanges(){
    this.changeTextToTheCurrentSearchs();
  }

  reproduceAlbum(SongsOfAlbum:any){
    console.log(SongsOfAlbum);
    this.spreadSongsOfAlbum.emit(SongsOfAlbum);
  }

  changeTextToTheCurrentSearchs(){
    switch(this.searchOption){
      case 1:
          this.resultsTitle = "Top 10 Canciones";
        break;
      case 2:
          this.searchTitle = "Busque por Nombre de Album"
          this.resultsTitle = "Resultados por Album: ";
        break;
      case 3:
          this.searchTitle = "Busque por Nombre de Cancion"
          this.resultsTitle = "Resultados por Cancion: ";
        break;
    }
  }
  reproduceSong(song:Song){
    this.spreadSong.emit(song);
  }
}
