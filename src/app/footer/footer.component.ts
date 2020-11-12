import { Component, Input, OnChanges } from '@angular/core';
import { Data } from '../models.entity/Data/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges {

  @Input() songsForReproduce:Data;
  @Input() indexOfSong:Data;
  existSongs:boolean=false;
  numberActualSong:number=0;
  songIsReproduced:boolean=false;
  songActual = new Audio();
  mapForDisplaySong:Map<string,string> = new Map<string,string>();

  ngOnChanges():void{
    if(this.songsForReproduce!=null){
      console.log(this.songsForReproduce);
      this.existSongs=true;
      this.numberActualSong=0;
      this.setMap();
      this.reproduceSong(this.songsForReproduce.data[this.numberActualSong].preview);
    }
  }

  setMap(){
    this.mapForDisplaySong.set('AlbumName',this.songsForReproduce.data[this.numberActualSong].album.title);
    this.mapForDisplaySong.set('ArtistName',this.songsForReproduce.data[this.numberActualSong].artist.name);
    this.mapForDisplaySong.set('SongName',this.songsForReproduce.data[this.numberActualSong].title);
    this.mapForDisplaySong.set('Cover',this.songsForReproduce.data[this.numberActualSong].album.cover_medium);
  }

  volumeControl(volume:any){
    this.songActual.volume = volume;
  }

  songControl(numberOfAction:any){
    switch(numberOfAction){
      case 1:
        this.songActual.play();
        this.songIsReproduced=true;
        break;
      case 2:
        this.songActual.pause();
        this.songIsReproduced=false;
        break;
      case 3:
          this.numberActualSong++;
          //LOOPEAR LISTA
          if(this.songsForReproduce.data[this.numberActualSong]==null){
            this.numberActualSong=0;
          }
          this.reproduceSong(this.songsForReproduce.data[this.numberActualSong].preview);
        break;
      case 4:
        this.numberActualSong--;
        //LOOPEAR LISTA
        if(this.songsForReproduce.data[this.numberActualSong]==null || this.numberActualSong<0){
          this.numberActualSong=0;
        }
        this.reproduceSong(this.songsForReproduce.data[this.numberActualSong].preview);
        break;
      case 5:
        this.songIsReproduced = !this.songActual.paused;
        break;
    }
  }

  reproduceSong(src:string){
    this.songActual.src = src;
    try {
      this.songActual.load();
      this.songActual.play();
      this.setMap();
    } catch (error) {
      console.log(error);
    }
    this.songIsReproduced = true;
  }

}
