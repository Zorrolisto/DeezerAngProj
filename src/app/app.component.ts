import { Component, OnInit } from '@angular/core';
import { Data } from './models.entity/Data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  songsForReproduce:Data;
  searchOption:number = 1;
  
  Play(songsForReproduce:Data){
    console.log(songsForReproduce);
    this.songsForReproduce = songsForReproduce;
  }
  changeSearchOption(newSearchOption:number){
    this.searchOption = newSearchOption;
  }
}
