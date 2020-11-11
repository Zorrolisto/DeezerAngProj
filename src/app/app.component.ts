import { Component, OnInit } from '@angular/core';
import { Album } from './models.entity/album/album';
import { AlbumService } from './models.service/albumService/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albumForReproduce:Album;

  Play(albumForReproduce:any){
    this.albumForReproduce = albumForReproduce;
  }
}
