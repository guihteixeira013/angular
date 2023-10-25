import { Component } from '@angular/core';
import { empty } from 'rxjs';

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
      id: 1,
      responsavel: 'antonio',
      empresa: 'Zé da Manga ltda.',
      cnpj: 758493759437
    },{
      id: 2,
      responsavel: 'jubileu',
      empresa: 'Jujuba fresca me.',
      cnpj: 382747329422
    },{
      id: 3,
      responsavel: 'MARCELO',
      empresa: 'Maracuja du bom mei.',
      cnpj: 84732974554
    },{
      id: 4,
      responsavel: 'pamela',
      empresa: 'pamelas ltda.',
      cnpj: 75834594375
    }
  ]

  clientePremium: boolean = true // TRUE aparecerá parágrafo
                        // FALSE não aparecerá

  // variáveis para novo cadastro
  empresa: string = ""
  cnpj!: number; // (!) diz ao Typescript que a varável será inicializada em algum momento antes de ser acessada.
  responsavel: string = ""

  adicionar() {
    if (this.empresa === "" || this.cnpj === null || this.cnpj === undefined || this.responsavel === "")  {
      window.alert('Please provide all data')
    } else {
      this.clientes.push({
        // é necessário  preencher todas as chaves que houver
        id: (this.clientes.length)+1,
        responsavel: this.responsavel,
        empresa: this.empresa,
        cnpj: this.cnpj
      })
    }
  }

}