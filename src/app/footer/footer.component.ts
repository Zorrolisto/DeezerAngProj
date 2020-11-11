import { Component, Input, OnChanges } from '@angular/core';
import { Album } from '../models.entity/album/album';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges {

  @Input() albumForReproduce:Album;
  existSongs:boolean=false;
  numberActualSong:number=0;
  cancionIsReproduced:boolean=false;
  songActual = new Audio();
  mapForDisplaySong:Map<string,string> = new Map<string,string>();

  ngOnChanges():void{
    if(this.albumForReproduce!=null){
      this.existSongs=true;
      this.numberActualSong=1;
      this.mapForDisplaySong.set('AlbumName',this.albumForReproduce.title);
      this.mapForDisplaySong.set('ArtistName',this.albumForReproduce.artist.name);
      this.mapForDisplaySong.set('SongName',this.albumForReproduce.tracks.data[this.numberActualSong].title);
      this.mapForDisplaySong.set('Cover',this.albumForReproduce.cover_medium);
      this.reproduceSong(this.albumForReproduce.tracks.data[this.numberActualSong].preview);
    }
  }

  volumeControl(volume:any){
    this.songActual.volume = volume;
  }

  songControl(numberOfAction:any){
    switch(numberOfAction){
      case 1:
        this.songActual.play();
        this.cancionIsReproduced=true;
        break;
      case 2:
        this.songActual.pause();
        this.cancionIsReproduced=false;
        break;
      case 3:
          this.numberActualSong++;
          if(this.albumForReproduce.tracks.data[this.numberActualSong]!=null){
            this.reproduceSong(this.albumForReproduce.tracks.data[this.numberActualSong].preview);
          }else{
            console.log("No hay siguiente cancion");
            this.numberActualSong--;
          }
        break;
      case 4:
        this.numberActualSong--;
        if(this.albumForReproduce.tracks.data[this.numberActualSong]!=null && this.numberActualSong>=0){
          this.reproduceSong(this.albumForReproduce.tracks.data[this.numberActualSong].preview);
        }else{
          console.log("No hay cancion anterior");
          this.numberActualSong++;
        }
        break;
      case 5:
        this.cancionIsReproduced = !this.songActual.paused;
        break;
    }
  }

  reproduceSong(src:string){
    this.songActual.src = src;
    try {
      this.songActual.load();
      this.songActual.play();
      this.mapForDisplaySong.set('SongName',this.albumForReproduce.tracks.data[this.numberActualSong].title);
    } catch (error) {
      console.log(error);
    }
    this.cancionIsReproduced = true;
  }

}
