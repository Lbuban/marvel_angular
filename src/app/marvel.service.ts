import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe"
  ;
  

  constructor(private http: Http) { }

  getMarvelInfo(): Observable<any> {
    
        return this.http.get(this.baseUrl)
          .map(result => { //results is what comes back from the marvel url.
            console.log(result.json())
            return result.json() //.map is the success statement. Return the results in a JSON object format.
          })
    
      }
}
