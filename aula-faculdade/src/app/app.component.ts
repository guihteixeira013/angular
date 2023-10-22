import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-faculdade';
  descricao1 = 'descrição do item 1';

  valores = [{
    nome: 'Guilherme',
    descricao: 'Programador',
    id: 1
  },{
    nome: 'Pamela',
    descricao: 'Programadora',
    id: 2
  },{
    nome: 'Angela',
    descricao: 'Aposentada',
    id: 3
  }
]

  clientePremium = true // TRUE aparecerá parágrafo
                        // FALSE não aparecerá

}
