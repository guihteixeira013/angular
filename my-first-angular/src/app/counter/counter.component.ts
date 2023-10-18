import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  // Eventos Increment e Decrement
  count: number = 0;
  increment() :void {
    this.count += this.count < 10 ? 1 : 0;
  }
  decrement() :void {
    this.count -= this.count ? 1 : 0;
  }
  
}
