import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() //this is a decorator that helps Angular understand the purpose of this class. This is Angular nomenclature.
export class MarvelService {
  
// Constructors are used for dependency injection (things that you need inside the class for the class to function) and makes it available for the application. Without passing, you can't call the http.get below. HTTP is the library that helps us use GET, POST, PUT, etc. requests.
  constructor(private http: Http) { }

  getMarvelInfo(endpoint): Observable<any> {
        return this.http.get(endpoint)
          .map(result => { //results is what comes back from the marvel url.
            console.log(result.json())
            return result.json() //.map is the success statement. Return the results in a JSON object format.
          })
    
      }
}
