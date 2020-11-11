import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../models.entity/album/album';
import { AlbumService } from '../models.service/albumService/album.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  albumForReproduce:Album = new Album();
  albumId:number=13429609;
  title = 'DeezerAngProj';
  
  @Output()
  propagar = new EventEmitter<any>(); 

  constructor( private albumService:AlbumService){
  }
  ngOnInit(){
  }

  getAlbum(){
    this.albumService.getAlbum(this.albumId)
      .subscribe(album => this.albumForReproduce = album); 
  }
  playAlbum(){
    console.log(this.albumForReproduce.title);
    this.propagar.emit(this.albumForReproduce);
  }
}
