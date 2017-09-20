import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  
  

  constructor(private http: Http) { }

  getMarvelInfo(endpoint): Observable<any> {
    
        return this.http.get(endpoint)
          .map(result => { //results is what comes back from the marvel url.
            console.log(result.json())
            return result.json() //.map is the success statement. Return the results in a JSON object format.
          })
    
      }
}
