import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-controller',
  templateUrl: './song-controller.component.html',
  styleUrls: ['./song-controller.component.css']
})
export class SongControllerComponent {

  playOrPause:boolean=true;
  
  @Input() existSongs:boolean;
  @Input() songIsReproduced:boolean;
  @Output()
  spread = new EventEmitter<any>(); 
  
  playPause(){
    if(this.existSongs){
      this.verifyIfSomethingIsReproduce();
      this.playOrPause = this.songIsReproduced;
      if(this.playOrPause){
        this.playOrPause = false;
      }else{
        this.playOrPause = true;
      }
      this.spread.emit(this.playOrPause ? 1 : 2);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }

  verifyIfSomethingIsReproduce(){
    this.spread.emit(5);
  }

  next(){
    if(this.existSongs){
      this.spread.emit(3);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }

  previous(){
    if(this.existSongs){
      this.spread.emit(4);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }
}
