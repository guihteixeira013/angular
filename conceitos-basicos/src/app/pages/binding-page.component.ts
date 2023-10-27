import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-binding',
        template: ` 
        <h1>Imagem do Angular</h1>
        <!-- Data binding one way -->
        <img [src]="imagem" [style]="{width: width, height: height}" />

        <!-- DATA BIND DE CLASSE -->
        <!-- SE sucesso for true, aplica a classe .sucess -->
        <div class="alert" [class]="{correto: sucesso}" [style]="{width: widthAlert, height: heightAlert}">Alerta</div>

        <button (click)="enviarDados()" [style.width.px]="widthButton">Enviar dados</button>
        `,
        styles: [
            `.alert {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                height: 100px;
                border: 1px solid blue;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            
            .correto {
                background-color: green;
                color: white;
            }
            `
        ]
    }
)

export class BindingPageComponent {
    imagem = "https://angular.io/assets/images/logos/angular/shield-large.svg"
    width = "300px"
    height = "180px"

    // estilo ALERT
    widthAlert = "300px"
    heightAlert = "150px"

    // estilo BUTTON "enviar dados"
    widthButton = 150

    // variável p/ Data bind de class
    sucesso = false

    enviarDados() {
        this.sucesso = !this.sucesso
    }
}