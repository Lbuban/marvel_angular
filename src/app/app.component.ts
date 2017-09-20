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


  constructor(private marvelService: MarvelService){}

  characters;


  getDataFromService(){
    this.marvelService.getMarvelInfo() //api question
      .subscribe ( //once the map (success) method runs, then do this.
        marvelInfo => {
          this.characters = marvelInfo.data.results; // grab character from array
          
        } 
      )
   }


   ngOnInit(){
     this.getDataFromService() //calling it so that our data loads as soon as the page loads.
   }
}
