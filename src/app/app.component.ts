import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavBarComponent],
  template: ` <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <main class="main container-fluid pt-5">
      <router-outlet />
    </main>
    <footer class="py-5 text-body-secondary card-footer ">
      <div class="container">
        <p class="m-0 text-center ">Copyright &copy; Meat 2025</p>
      </div>
    </footer>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meat-app_19';
}
