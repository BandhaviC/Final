import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}
const beginNum = document.getElementById("numberInput");
const endNum = document.getElementById("numberInput1");
const button = document.getElementById("submit");
button.addEventListener("click", start);

function number_even(x, y) {
  let numbers = [];

  if (x > y) {
    for (let i = y + 1; i < x; i++) {
      if (i % 2 == 0) {
        numbers.push(i);
      }
    }
  }

  return numbers;
}
var result = numbers.join(",");

const outputNode = document.getElementById("even");
outputNode.innerHTML = "<span>" + result + "</span>";
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
