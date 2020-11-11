import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-controller',
  templateUrl: './volume-controller.component.html',
  styleUrls: ['./volume-controller.component.css']
})
export class VolumeControllerComponent implements OnInit {

  volume: number;

  constructor() { }

  ngOnInit(): void {
    this.volume = 1;
  }

}
