import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  name = 'Angular';
  myColor = 'hotpink';

  ngAfterViewInit(){

    setInterval(()=>{
       const possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  const colorPick = Math.floor(Math.random() * possibleColors.length);
    this.myColor = possibleColors[colorPick];
    }, 1000);
  }
}
