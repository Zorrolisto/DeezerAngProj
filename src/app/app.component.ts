import { Component, OnInit } from '@angular/core';
import { Data } from './models.entity/Data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tracksForReproduce:Data;

    Play(tracksForReproduce:any){
    this.tracksForReproduce = tracksForReproduce;
  }
}
