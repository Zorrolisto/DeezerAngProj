import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//REQUESTS
import { HttpClientModule } from '@angular/common/http';

//MATERIAL ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SongDisplayComponent } from './footerComponents/song-display/song-display.component';
import { SongControllerComponent } from './footerComponents/song-controller/song-controller.component';
import { VolumeControllerComponent } from './footerComponents/volume-controller/volume-controller.component';
import { MainComponent } from './main/main.component';
import { HeaderBarComponent } from './mainComponents/searchBar-userProfile/header-bar/header-bar.component';
import { SearchBarComponent } from './mainComponents/searchBar-userProfile/search-bar/search-bar.component';
import { UserProfileComponent } from './mainComponents/searchBar-userProfile/user-profile/user-profile.component';
import { TracksDisplayComponent } from './mainComponents/searchBar-userProfile/tracks-display/tracks-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    SongDisplayComponent,
    SongControllerComponent,
    VolumeControllerComponent,
    MainComponent,
    HeaderBarComponent,
    SearchBarComponent,
    UserProfileComponent,
    TracksDisplayComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
