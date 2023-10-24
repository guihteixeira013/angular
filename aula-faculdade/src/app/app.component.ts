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

// testando novamente o que aprendi na aula passada
  clientes = [
    {
      responsavel: 'antonio',
      empresa: 'Zé da Manga ltda.',
      cnpj: 758493759437
    },{
      responsavel: 'jubileu',
      empresa: 'Jujuba fresca me.',
      cnpj: 382747329422
    },{
      responsavel: 'MARCELO',
      empresa: 'Maracuja du bom mei.',
      cnpj: 84732974554
    },{
      responsavel: 'pamela',
      empresa: 'pamelas ltda.',
      cnpj: 75834594375
    }
  ]

  clientePremium = true // TRUE aparecerá parágrafo
                        // FALSE não aparecerá

}
