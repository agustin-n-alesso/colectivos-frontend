import { Component } from "@angular/core";

@Component({
	selector: "Container",
	template: `
		<div class="w-full min-h-screen pt-10 px-10">
			<ng-content></ng-content>
		</div>
	`
})
export default class ContainerComponent {}