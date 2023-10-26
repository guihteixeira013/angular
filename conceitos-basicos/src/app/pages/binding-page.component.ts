import { Component } from "@angular/core";

@Component(
    {
    selector: 'app-binding',
    template: ` 
    <h1>Imagem do Angular</h1>
        <!-- Data binding one way -->
        <img [src]="imagem" [style]="{width: width}" />
    `
    }
)

export class BindingPageComponent {
    imagem = "https://angular.io/assets/images/logos/angular/shield-large.svg"
    width = '300px'
}