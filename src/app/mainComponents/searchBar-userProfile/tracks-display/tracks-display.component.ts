import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/models.entity/Data/data';
import { Song } from 'src/app/models.entity/song/song';

@Component({
  selector: 'app-tracks-display',
  templateUrl: './tracks-display.component.html',
  styleUrls: ['./tracks-display.component.css']
})
export class TracksDisplayComponent{
  @Output()
  propagar = new EventEmitter<any>(); 
  @Output()
  propagarCancion = new EventEmitter<any>(); 
  @Input() tracksForReproduce:Data;

  getAnotherPageTenAlbums(url:string){
    this.propagar.emit(url);
  }

  reproducirCancion(track:Song){
    this.propagarCancion.emit(track);
  }
}
