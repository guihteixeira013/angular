import { Component, Input } from '@angular/core';

// @Component é um decorator
@Component({  // transmitindo 1 objeto ( {} ) com metadados
  // 3 índices : selector, templateUrl e StyleUrls

    // qual a tag HTML que usaremos pra representar esse componente? 
  selector: 'app-hello', // (<app-hello> </app-hello)
    // qual o caminho que está o arquivo html contendo o conteúdo visual do componente?
  templateUrl: './hello.component.html',
    // quais os caminhos de arquivos para estilização
  styleUrls: ['./hello.component.css']

  // NOTA: Os arquivos de estilização do componente será utilizada apenas pelos arquivos .html do próprio componente.
})

export class HelloComponent {
  @Input( ) name: string = 'Pamela';
}
