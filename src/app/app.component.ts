import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent,NavbarComponent,LoadingOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'guard-and-interceptors';
}
