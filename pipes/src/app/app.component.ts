import { Component } from '@angular/core';

interface ModelObject {
  [key: string]: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  date: Date;
  moneyAmount: number;
  height = 0.0; // another type of property defining
  // object: ModelObject = {}; // using interfaces
  object: {[key: string] : any} = {}; // compact version
  distance: number;

  constructor() {
    this.name = '';
    this.date = new Date();
    this.moneyAmount = 0;
    this.distance = 0;
  }

  onNameChange = (event: Event) => {
    this.name = (event?.target as HTMLInputElement)?.value;
  }

  onDateChange = (event: Event) => {
    this.date = new Date((event?.target as HTMLInputElement)?.value) || new Date();
  }

  onMoneyAmountChange = (event: Event) => {
    this.moneyAmount = parseFloat((event?.target as HTMLInputElement)?.value) || 0.0;

  }

  onHeightChange = (event: Event) => {
    this.height = parseFloat((event?.target as HTMLInputElement)?.value) || 0.0;
  }

  onDistanceChange = (event: Event) => {
    this.distance = +(<HTMLInputElement>event?.target)?.value;
  }

  onObjectChange(event: Event) {
    const value = (<HTMLInputElement>event?.target).value;
    console.log(this.object, value)
    const sections = value.split(/\s+/); //regex
    for(const section of sections) {
      const parts = section.split(":");
      const key = parts[0] as string; // or .toString()
      if(parts.length == 2){
        this.object[key] = !isNaN(+parts[1]) ? +parts[1] : parts[1];
      }
      else if(parts.length > 2){
        this.object[key] = "what the fuck!";

      }
    }
  }
}
