import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    InfoComponent,
    HeaderComponent,
    AccountInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA45ed6hdRqgaNg6zQKAUiYvEwtCwJxcIE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
