import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeyComponent } from './keys/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
