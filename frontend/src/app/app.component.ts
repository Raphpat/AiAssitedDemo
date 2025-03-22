import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	standalone: true,
})
export class AppComponent {
	readonly #title = 'Math Operations' as const;

	get title(): string {
		return this.#title;
	}
}
