import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as en from '../assets/lang/lang-en.json'
import * as de from '../assets/lang/lang-de.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'prime-ng-demo';
  checkedWifi: boolean = true;
  checkedSwitch: boolean = true;
  currentLang: any;
  @ViewChild('toggleButtonDiv') private toggleButtonRef: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    console.log(this.toggleButtonRef);
    const parentElement = this.toggleButtonRef.nativeElement;
    console.log(parentElement);
    const firstChild = parentElement.children[0];
    const firstImage = parentElement.querySelector("p-togglebutton div");
    firstImage.setAttribute('aria-label', 'wifi-toggle-button');
    console.log(firstImage);
  }

  ngOnInit() {
    this.currentLang = en;
    this.currentLang = this.currentLang.default;

    console.log(this.currentLang.ToggleButton);
  }
}
