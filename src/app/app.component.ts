import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as en from '../assets/lang/lang-en.json'
import * as de from '../assets/lang/lang-de.json'
import { PrimeNgAriaService } from './prime-ng-aria.service';
import { AttributeModel } from './attribute.model';

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

  constructor(private ariaService: PrimeNgAriaService) { }

  ngAfterViewInit() {
    let ariaLabel = { key: "aria-label", value: "wifi toggle button" } as AttributeModel;
    this.ariaService.toggleButtonAttributesSet("toggle-button-div", [ariaLabel]);
  }

  ngOnInit() {
    this.currentLang = en;
    this.currentLang = this.currentLang.default;

    console.log(this.currentLang.ToggleButton);
  }
}
