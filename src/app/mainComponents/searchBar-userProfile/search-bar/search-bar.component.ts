import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output()
  propagar = new EventEmitter<any>(); 

  wordToSearch:String;
  
  onEnter(){
    this.search();
  }
  
  search(){
    this.propagar.emit(this.wordToSearch);
  }
}
