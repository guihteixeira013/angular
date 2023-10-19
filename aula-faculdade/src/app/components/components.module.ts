import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";

@NgModule ({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class ComponentModule {

}
// um MÓDULO é um componente REUTILIZADO
// que pode ser importado ou exportado