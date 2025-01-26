import {
  afterNextRender,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chessground } from 'chessground';

@Component({
  selector: 'nv-playground',
  imports: [CommonModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {
  protected configs = {};
  protected container =
    viewChild.required<ElementRef<HTMLElement>>('container');

  constructor() {
    afterNextRender(() => {
      const ground = Chessground(this.container().nativeElement, {});
    });
  }
}
