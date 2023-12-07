import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    password: string;
    includeLetters: boolean;
    includeSymbols: boolean;
    includeShadySymbols: boolean;
    includeDigits: boolean;
    length: number;

    constructor() {
        this.password = '';
        this.includeDigits = this.includeLetters = this.includeSymbols = this.includeShadySymbols = false;
        this.length = 0;
    }

    getPassword(): string {
        return this.password;
    }

    onGenerateButtonClick() {
        this.password = '';
        console.log(
            `includeLetters: ${this.includeLetters} includeSymbols: ${this.includeSymbols} includeDigits: ${this.includeDigits}`
        );

        const characterChoice =
            (this.includeLetters ?
                'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' :
                '') +
            (this.includeDigits ? '0123456789' : '') +
            (this.includeSymbols ? '~!@#$%^&*()._-' : '') +
            (this.includeShadySymbols ? '+*/\\[]<>,:;' : '');
        for (let i = 0; i < this.length; i++) {
            const index = Math.floor(Math.random() * (characterChoice.length - 1));
            this.password += characterChoice[index];
        }
    }

    interpolationSyntaxCheck = () =>
        'This is just a function call by interpolation syntax.';

    onUseLettersChange() {
        this.includeLetters = !this.includeLetters;
    }

    onUseDigitsChange() {
        this.includeDigits = !this.includeDigits;
    }

    onUseSymbolsChange() {
        this.includeSymbols = !this.includeSymbols;
    }

    onUseShadySymbolsChange() {
      this.includeShadySymbols = !this.includeShadySymbols;
    }
    onLengthChange(event: Event) {
        if (event && event.target) {
            console.log((event.target as HTMLInputElement).value);
            console.log(( < HTMLInputElement > event.target).value);

            const value = parseInt((event.target as HTMLInputElement).value);
            if (!isNaN(value)) {
                if (value > 0) {
                    this.length = value;
                } else {
                  window.alert("Length must be positive you idiot!");
                }
            }
        }
    }
}
