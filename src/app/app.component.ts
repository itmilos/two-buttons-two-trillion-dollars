import {Component, Inject,} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//REfactor for Angular

export class AppComponent {
  title = 'TBTTD';
  // private preferedColorScheme: Boolean;
  // private buttonAttribute: string;
  constructor (@Inject(DOCUMENT) private document: Document) {}

  // _scheme: "auto",
  // menuTarget: "details[role='list']",
  // buttonsTarget: "a[data-theme-switcher]",
  // buttonAttribute: "data-theme-switcher",
  // rootAttribute: "data-theme",
  // localStorageKey: "picoPreferedColorScheme",


  // this.scheme = this.schemeFromLocalStorage;
  // this.initSwitchers();

  // get schemeFromLocalStorage() {
  //   if (typeof window.localStorage !== "undefined") {
  //     if (window.localStorage.getItem(this.localStorageKey) !== null) {
  //       return window.localStorage.getItem(this.localStorageKey);
  //     }
  //   }
  //   return this._scheme;
  // },
  //
  // get preferedColorScheme() {
  //   return window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "dark"
  //     : "light";
  // },

  // initSwitchers() {
  //   // @ts-ignore
  //   const buttons = DOCUMENT.querySelectorAll(this.buttonsTarget);
  //   buttons.forEach((button) => {
  //     button.addEventListener("click", event => {
  //       event.preventDefault();
  //       this.scheme = button.getAttribute(this.buttonAttribute);
  //       // @ts-ignore
  //       DOCUMENT.querySelector(this.menuTarget).removeAttribute("open");
  //     }, false);
  //   });
  // },
  //
  // set scheme(scheme) {
  //   if (scheme == "auto") {
  //     this.preferedColorScheme == "dark"
  //       ? (this._scheme = "dark")
  //       : (this._scheme = "light");
  //   } else if (scheme == "dark" || scheme == "light") {
  //     this._scheme = scheme;
  //   }
  //   this.applyScheme();
  //   this.schemeToLocalStorage();
  // },
  //
  // get scheme() {
  //   return this._scheme;
  // },
  //
  // applyScheme() {
  //   // @ts-ignore
  //   DOCUMENT
  //     .querySelector("html")
  //     .setAttribute(this.rootAttribute, this.scheme);
  // },
  //
  // schemeToLocalStorage() {
  //   if (typeof window.localStorage !== "undefined") {
  //     // window.localStorage.setItem(this.localStorageKey, this.scheme);
  //   }
  // }
}


// interface ThemeSwitcher {
//   _scheme: string;
//   menuTarget: string;
//   buttonsTarget: string;
//   buttonAttribute: string;
//   rootAttribute: string;
//   localStorageKey: string;
//   init(): void;
//   schemeFromLocalStorage: string;
//   preferedColorScheme: string;
//   initSwitchers(): void;
//   scheme: string;
//   applyScheme(): void;
//   schemeToLocalStorage(): void;
// }
//
