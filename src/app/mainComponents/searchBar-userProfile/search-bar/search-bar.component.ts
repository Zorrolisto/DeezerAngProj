import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output()
  spread = new EventEmitter<any>(); 

  wordToSearch:String;
  
  onEnter(){
    this.search();
  }
  
  search(){
    if(this.wordToSearch && this.wordToSearch.length>0){
    this.spread.emit(this.wordToSearch);
    }else{
      console.log("Busqueda Vacia");
    }
  }
}
