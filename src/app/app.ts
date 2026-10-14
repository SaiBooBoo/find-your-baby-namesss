import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from '../components/layout/main-layout/main-layout';

@Component({
  imports: [RouterOutlet, MainLayout],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('baby-name-finder');
}
