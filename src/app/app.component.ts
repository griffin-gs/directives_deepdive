import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highlight/better-highlight.directive";
import {UnlessDirective} from "./unless/unless.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgClass, NgStyle, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives_deepdive';
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;
}
