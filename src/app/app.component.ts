import { Component, HostListener } from '@angular/core';


export enum KEY_CODE {
  ESC = 27
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'KR-angular-test';
  btnB:boolean = null;
  theQuestion:boolean = false;
  bClicked:boolean = false;
  aClicked:boolean = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.ESC) {
      this.btnB = null;
    }
  }

  constructor() {}

 

  public setButtonState(state:boolean):void{
    this.btnB = state;
    if(this.btnB){
      this.bClicked = true;
    }else{
      this.aClicked = true;
    }
    if(this.bClicked && this.aClicked && !this.theQuestion){
      console.log("That is the question");
      this.theQuestion = true;
    }
  }
}

