import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SongDisplayComponent } from './footerComponents/song-display/song-display.component';
import { SongControllerComponent } from './footerComponents/song-controller/song-controller.component';
import { VolumeControllerComponent } from './footerComponents/volume-controller/volume-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    SongDisplayComponent,
    SongControllerComponent,
    VolumeControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
