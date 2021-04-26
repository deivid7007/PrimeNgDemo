import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable, ViewChild } from "@angular/core";
import { AttributeModel } from "./attribute.model";

@Injectable({
    providedIn: 'root'
})
export class PrimeNgAriaService {

    constructor(@Inject(DOCUMENT) private document: HTMLDocument) { }

    toggleButtonAttributesSet(id: string, attributes: Array<AttributeModel>) {
        let toggleButtonRef = this.document.getElementById(id);

        const firstChild = toggleButtonRef.children[0];
        const firstToggleButtonDiv = toggleButtonRef.querySelector("p-togglebutton div");

        attributes.forEach(attribute => {
            firstToggleButtonDiv.setAttribute(attribute.key, attribute.value);
        });
    }

}