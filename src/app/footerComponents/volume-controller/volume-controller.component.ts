import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-volume-controller',
  templateUrl: './volume-controller.component.html',
  styleUrls: ['./volume-controller.component.css']
})
export class VolumeControllerComponent {

  volume: number = 1;
  
  @Output()
  propagar = new EventEmitter<any>(); 

  passVolume(any){
    console.log("Volumen en: " + this.volume);
    this.propagar.emit(this.volume);
  }
  
  mute(){
    if(this.volume >0){
      this.volume=0;
    }else if(this.volume ==0){
      this.volume=1;
    }
    this.propagar.emit(this.volume);
  }
}
