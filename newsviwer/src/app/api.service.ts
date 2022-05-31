import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
 
const API_URL='https://newsapi.org/v2/everything?q=tesla&from=2022-02-24&sortBy=publishedAt&apiKey=67969bda64664b5bbbe88c98b21d01f3'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient ) {}

    public get(url: string): Observable<any> {
      return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
    }
  
   
}
