import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-example',
    template: `
  <h3>Click the button to change its color!</h3>
  <button (click)="toggleIsCorrect()"     // event binding
    [@toggleClick]="isGreen">Toggle Me!</button>  // animation binding
    `,
    animations: [       // metadata array
        trigger('toggleClick', [     // trigger block
            state('true', style({      // final CSS following animation
                backgroundColor: 'green'
            })),
            state('false', style({
                backgroundColor: 'red'
            })),
            transition('true => false', animate('1000ms linear')),  // animation timing
            transition('false => true', animate('1000ms linear'))
        ])
    ]        // end of trigger block
})
export class ExampleComponent {
    isGreen: string = 'true';

    toggleIsCorrect() {
        this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
    }
}