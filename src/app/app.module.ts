import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
