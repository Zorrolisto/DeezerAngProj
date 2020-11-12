import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Data } from 'src/app/models.entity/Data/data';
import { Song } from 'src/app/models.entity/song/song';
import { ArtistService } from 'src/app/models.service/artistService/artist.service';
import { SongService } from 'src/app/models.service/songService/song.service';

@Component({
  selector: 'app-cover-song-display',
  templateUrl: './cover-song-display.component.html',
  styleUrls: ['./cover-song-display.component.css']
})
export class CoverSongDisplayComponent implements OnChanges{
  @Input()songForDisplayCover:Song[];
  @Input()searchOption:number;
  SongsOfAlbum:Data;
  indexOfAlbum:number=0;
  @Output()
  spread = new EventEmitter<any>(); 
  
  constructor(
    private artistService:ArtistService,
    private songService:SongService
    ){}

  ngOnChanges(){
    this.indexOfAlbum=0;
    this.refreshCover();
  }
  refreshCover(){
    this.obtainFans();
    this.obtainAlbum();
  }
  obtainFans(){
    this.artistService.getNumberOfFans(this.songForDisplayCover[this.indexOfAlbum].artist.id)
      .subscribe(
        (artist)=>{
          this.songForDisplayCover[this.indexOfAlbum].artist.nb_fan = artist.nb_fan
        },error=>console.log('Error al obtener numero de fans')
      );
  }
  obtainAlbum(){
    this.songService.getTracksByArtistAndAlbum(
      this.songForDisplayCover[this.indexOfAlbum].artist.name, 
      this.songForDisplayCover[this.indexOfAlbum].album.title)
      .subscribe(
      (totalSongsOfAlbum)=>{
        this.SongsOfAlbum = totalSongsOfAlbum
      },error=>console.log('Error al obtener Album')
    );
  }
  reproduceAlbum(){
    console.log(this.songForDisplayCover[0]);
    this.spread.emit(this.SongsOfAlbum);
  }
  anteriorAlbum(){
    if(this.songForDisplayCover[this.indexOfAlbum-1]){
      this.indexOfAlbum--;
      this.refreshCover();
    }else{
      this.indexOfAlbum=0;
    }
  }
  siguienteAlbum(){
    if(this.songForDisplayCover[this.indexOfAlbum+1]){
      this.indexOfAlbum++;
      this.refreshCover();
    }else{
      this.indexOfAlbum=0;
    }
  }
}
