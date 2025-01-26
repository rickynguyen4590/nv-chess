import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

@Component({
  imports: [RouterModule, LayoutComponent],
  selector: 'nv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chess';
}
