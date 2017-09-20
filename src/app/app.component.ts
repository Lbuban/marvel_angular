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

  //becuase it's "injectable" we are injecting the service in this constructor. Create a private property (marvelService) on this class (AppComponent) called MarvelService. This is standard syntax for adding a service. 
  // Constructors are used for dependency injection.
  constructor(private marvelService: MarvelService){}

  characters;
  
//this is a default function - we're using it to both display all the characters, as well as using it to display the search results. 
  getDataFromService(endpoint = this.baseUrl + "&limit=50"){
    this.marvelService.getMarvelInfo(endpoint) //hit the marvel service
      .subscribe ( //once the map (success) method runs, then do this.
        marvelInfo => { //marvelInfo is the name of the function and can be potato. The following happens when you call the line below.
          this.characters = marvelInfo.data.results; // grab character data from array (use postman to see JSON tree structure)
      })
   }

   //When this is run, it performs the function above and passes in the baseUrl + &nameStartsWith= + searchTerm (which is 2 way data bound to the input field in the child component.html file)
  newSearch(searchTerm) {
    this.getDataFromService(`${this.baseUrl}&nameStartsWith=${searchTerm}`) //backticks are another way to concantinate. 
  }
   
  //We are calling an empty value, so when this runs, we display all the characters as soon as the page loads.
   ngOnInit(){
     this.getDataFromService() 
   }
}
