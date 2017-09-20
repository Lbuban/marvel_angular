import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; //need this for Search input field
import { MarvelService } from './marvel.service'; // need for marvel API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Marvel';
  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe";

  constructor(private marvelService: MarvelService){}

  characters;
  

  getDataFromService(endpoint = this.baseUrl){
    this.marvelService.getMarvelInfo(endpoint) //api question
      .subscribe ( //once the map (success) method runs, then do this.
        marvelInfo => {
          this.characters = marvelInfo.data.results; // grab character from array
      })
   }


  newSearch(searchTerm) {
    this.getDataFromService(`${this.baseUrl}&nameStartsWith=${searchTerm}`)
  }
   

   ngOnInit(){
     this.getDataFromService() //calling it so that our data loads as soon as the page loads.
   }
}
