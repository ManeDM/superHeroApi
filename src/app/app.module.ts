import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';

import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeroesTableComponent,
    SearchFilterPipe,
   
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
