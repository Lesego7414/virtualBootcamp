import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'; // <-- Import your AboutComponent

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent // <-- Declare your AboutComponent here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
