import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <section class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center ">
          <h1 class="display-4 fw-bolder">Bem vindo ao Meat!</h1>
          <p class="lead fw-normal text-black-50 mb-0 m-5">
            Está com fome? Peça e receba em casa.
          </p>
          <section>
            <a
              class="btn m-5 btn-primary btn-lg"
              [routerLink]="['/restaurants']"
              >Ver Restaurantes</a
            >
          </section>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
