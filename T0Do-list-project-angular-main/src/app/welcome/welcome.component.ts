import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  addtask:any[]=[];
  addtocompleted:any[]=[];
  image='assets/images/list1.png'
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('completedTask')){
      this.addtask= JSON.parse(localStorage.getItem('completedTask')!)
    }
   // localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));

    if(localStorage.getItem('mytasks')){
      this.addtask= JSON.parse(localStorage.getItem('mytasks')!)
    }
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));

    // this.route.paramMap.subscribe(res=>{
    //   console.log(res);
    // })

    // if(this.addtocompleted!=null && this.addtask!=null){
    //   this.router.navigate(['/task-board']);
    // }
  }

}
