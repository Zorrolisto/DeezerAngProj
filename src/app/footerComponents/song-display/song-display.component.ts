import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.css']
})
export class SongDisplayComponent implements OnInit {

  @Input()mapForDisplaySong:Map<string,string>;

  constructor() { }

  ngOnInit(): void {
  }

}
