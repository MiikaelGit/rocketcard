import { changeColor } from "./app-background.js";
import { data } from "./github-data.js";
const backgoundButton = document.querySelector('.background-button');
backgoundButton.onclick = changeColor;

data();