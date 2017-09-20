import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchTerm = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

// userSearch: string;
// checkSearch;



// onClickMe (){ 
//   if (baseUrl + "&nameStartsWith" + this.searchTerm === baseUrl + "&nameStartsWith" + character.name){
    
//   } 
 
  
//   this.refreshAnswer.emit(); //
//   this.userAnswer='' //empty answer after submit
 

 }
