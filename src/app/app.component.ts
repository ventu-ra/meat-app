import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavBarComponent],
  template: ` <main class="main">
      <header>
        <app-nav-bar></app-nav-bar>
      </header>
      <section>
        <router-outlet />
      </section>
    </main>
    <footer class="lead py-5">
      <div class="container">
        <p class="m-0 text-center ">Copyright &copy; Meat 2025</p>
      </div>
    </footer>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meat-app_19';
}
