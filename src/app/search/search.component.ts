import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searched = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() { }

  ngOnInit() {
  }

  // userSearch: string;
  // checkSearch;
  // searchURL: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe&nameStartsWith="
  // ;


  performSearch() {
    this.searched.emit(this.searchTerm);
  }






//   this.refreshAnswer.emit(); //
//   this.userAnswer='' //empty answer after submit
 

 }
