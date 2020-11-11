import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-song-controller',
  templateUrl: './song-controller.component.html',
  styleUrls: ['./song-controller.component.css']
})
export class SongControllerComponent {

  playOrPause:boolean=true;
  
  @Input() existSongs:boolean;
  @Input() cancionIsReproduced:boolean;
  @Output()
  propagar = new EventEmitter<any>(); 
  
  playPause(){
    if(this.existSongs){
      this.verifyIfSomethingIsReproduce();
      this.playOrPause = this.cancionIsReproduced;
      if(this.playOrPause){
        this.playOrPause = false;
      }else{
        this.playOrPause = true;
      }
      this.propagar.emit(this.playOrPause ? 1 : 2);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }

  verifyIfSomethingIsReproduce(){
    this.propagar.emit(5);
  }

  next(){
    if(this.existSongs){
      this.propagar.emit(3);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }

  previous(){
    if(this.existSongs){
      this.propagar.emit(4);
    }else{
      console.log("No hay canciones para reproducir.");
    }
  }
}
