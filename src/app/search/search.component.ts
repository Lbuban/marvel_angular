import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //Since we are communicating from child to parent, we need to use @Output to "throw" the term "searched" to the parent (also add Output and EventEmitter above in import statement)
  @Output() searched = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() { }

//the interface says you have to have this method. Don't have to use it, but must have it. Could put an alert in there just to show that it's working upon load of the page. Or you could add this.searchTerm = "Kelsey" and it will add that to the search input field upon load.
  ngOnInit() {
  }

//use .emit to throw "searched" to our parent because our parent is what holds all the logic to talk to the API. The parent needs to know that an event happened and how to respond.
  performSearch() {
    this.searched.emit(this.searchTerm); //searched represents the event and this.searchTerm is what the user entered. This will be "caught" on the parent .html file within the child selector tags (<app-search>).
  }

 }
