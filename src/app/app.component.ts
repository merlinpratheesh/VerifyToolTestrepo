import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';

export interface Items{
  Item: string; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loggedin = false;
  subAuth: Subscription;
  myarraydisplay: [] = [];
  mysubDocRead: Subscription | undefined;
  myitemsdisplay: Observable<any> | undefined;

  constructor(public afAuth: AngularFireAuth, public tutorialService: UserdataService) {

    this.subAuth = this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.loggedin = true;
        this.myitemsdisplay = this.tutorialService.getDocumentSnapShots('TestCollection','TestId').pipe(take(1));
        this.mysubDocRead= this.myitemsdisplay.subscribe(testdataSubscribed=>{
          if(testdataSubscribed !==null){
            for(const fieldkey in testdataSubscribed){
              console.log(fieldkey,testdataSubscribed[fieldkey]);//keys & values              
            }
          }
        });

      } else {
        this.loggedin = false;
      }
    });

  }

  ngOnDestroy()
{
  this.subAuth.unsubscribe();
}
}



