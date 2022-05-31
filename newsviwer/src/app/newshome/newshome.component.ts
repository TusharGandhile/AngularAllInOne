import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-newshome',
  templateUrl: './newshome.component.html',
  styleUrls: ['./newshome.component.scss']
})
export class NewshomeComponent implements OnInit {
  
  image='assets/images/images.png'
  news:any[]=[];
  constructor(public http:HttpClient ,private api: ApiService) { }

  ngOnInit(): void {

    this.http.get<any>('https://newsapi.org/v2/everything?q=tesla&from=2022-04-07&sortBy=publishedAt&apiKey=67969bda64664b5bbbe88c98b21d01f3').subscribe((res: any) => {
      this.news= res.articles;
      console.log('data response', this.news);
    });

  }
 
  }

