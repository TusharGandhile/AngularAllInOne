import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  list:any=[];
  arr=[1,2,3,4,5,6,7,8,9,10];
  searchText:any
  uID:any;
  arr1:any=[]
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
      this.list=res
     
  });
  }
display(i:any){
this.router.navigate(['/home',i])

}
drop( event: CdkDragDrop<string[]>) {
  moveItemInArray(this.arr, event.previousIndex, event.currentIndex);
  localStorage.setItem('myTask',JSON.stringify(this.arr));
}
}
