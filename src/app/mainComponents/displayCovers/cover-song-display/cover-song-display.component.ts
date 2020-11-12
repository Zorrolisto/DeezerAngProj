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
  @Input()songForDisplayCover:Song;
  @Input()searchOption:number;
  SongsOfAlbum:Data;
  @Output()
  spread = new EventEmitter<any>(); 
  
  constructor(
    private artistService:ArtistService,
    private songService:SongService
    ){}

  ngOnChanges(){
    this.obtainFans();
    this.obtainAlbum();
  }
  obtainFans(){
    this.artistService.getNumberOfFans(this.songForDisplayCover.artist.id)
      .subscribe(
        (artist)=>{
          this.songForDisplayCover.artist.nb_fan = artist.nb_fan
        },error=>console.log('Error al obtener numero de fans')
      );
  }
  obtainAlbum(){
    this.songService.getTracksByArtistAndAlbum(this.songForDisplayCover.artist.name, this.songForDisplayCover.album.title).subscribe(
      (totalSongsOfAlbum)=>{
        this.SongsOfAlbum = totalSongsOfAlbum
      },error=>console.log('Error al obtener Album')
    );
  }
  reproduceAlbum(){
    this.spread.emit(this.SongsOfAlbum);
  }
}
