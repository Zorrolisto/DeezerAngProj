import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  searchOption:number=1;

  @Output()
  spread = new EventEmitter<any>();

  changeOption(searchOption:number){
    this.searchOption = searchOption;
    this.spread.emit(searchOption);
  }
}
