import { Component, OnInit } from '@angular/core';
import * as en from '../assets/lang/lang-en.json'
import * as de from '../assets/lang/lang-de.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prime-ng-demo';
  checkedWifi: boolean = true;
  checkedSwitch: boolean = true;
  currentLang: any;

  ngOnInit() {
    this.currentLang = de;
    this.currentLang = this.currentLang.default;

    console.log(this.currentLang.ToggleButton);
  }
}
