import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-faculdade';
  descricao1 = 'descrição do item 1'

  valor: {
    descricao: string,
    nome: string,
    id: number
  } = {
    descricao: 'teste',
    nome: 'nome',
    id: 1
  }

  clientePremium = true // TRUE aparecerá parágrafo
                        // FALSE não aparecerá

}
