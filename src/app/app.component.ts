import { Component, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RoutingState } from 'app/services/routingState';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(private routingState: RoutingState) {
		routingState.loadRouting();
	}
}
