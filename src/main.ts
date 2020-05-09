import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { start } from "repl";

if (environment.production) {
  enableProdMode();
}
const beginNum = document.getElementById("numberInput");
const endNum = document.getElementById("numberInput1");
const button = document.getElementById("submit");
button.addEventListener("click", start);

function number_even(x, y) {
  var numbers: number[];

  if (x > y) {
    for (let i = y + 1; i < x; i++) {
      if (i % 2 == 0) {
        numbers.push(i);
      }
    }
  }

  return numbers;
}
var result: any;
result = numbers.join(",");

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
