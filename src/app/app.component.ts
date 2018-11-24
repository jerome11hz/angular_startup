import { Component } from '@angular/core';
import { Par } from './models/par.model';
import { ParContent } from './models/par-content.model';
import { ParReport } from './models/par-report.model';
import { ParScore } from './models/par-score.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parObj:Par=new Par();
  parReport:ParReport=new ParReport();

  parContents=[
    {id:'c1',name:'technical',score:0,isactive:false},
    {id:'c2',name:'communication',score:0,isactive:false},
    {id:'c3',name:'Attitude',score:0,isactive:false},
    {id:'c4',name:'punctuality',score:0,isactive:false},
    {id:'c5',name:'Attention to details',score:0,isactive:false},
    {id:'c6',name:'punctuality',score:0,isactive:false}
  ]

  parAppraisors=[
    {id:'A001',empId:'E001',empName:'John',isActive:false},
    {id:'A002',empId:'E002',empName:'David',isActive:false},
    {id:'A003',empId:'E003',empName:'Solomon',isActive:false}
  ]

  // parContents=[
  //   {id:'c1',name:'technical'},
  //   {id:'c2',name:'communication'},
  //   {id:'c3',name:'Attitude'},
  //   {id:'c4',name:'punctuality'},
  //   {id:'c5',name:'Attention to details'},
  //   {id:'c6',name:'punctuality'}
  // ]
  title = 'SpringUserportal';

  callLoop(){
  this.parObj.parContentList=[];
    for(let parContent of this.parContents){
      if(parContent.isactive==true){
        //console.log(parContent.id);
        //this.parContent.id=parContent.id;
        this.parObj.parContentList.push(new ParContent(parContent.id));
      }

    }
  }

  callScore(){
    this.parReport.parscoreList=[];
    this.parObj.parContentList=[];
      for(let parContent of this.parContents){
        if(parContent.isactive==true){
          //console.log(parContent.id);
          //this.parContent.id=parContent.id;
          this.parReport.parscoreList.push(new ParScore(parContent.id,parContent.score));
        
        }
  
      }
    }

  selectAll(){
    for(let parContent of this.parContents){
      parContent.isactive=true;
      
    }
  }

  deselectAll(){
    for(let parContent of this.parContents){
      parContent.isactive=false;
      
    }
  }
}
