import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';




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
    FormsModule,
    StoreModule.forRoot({ }),
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
