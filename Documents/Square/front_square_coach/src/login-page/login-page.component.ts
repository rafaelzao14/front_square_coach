import { AuthControllerLoginClientResult } from './../http/services/api.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { APIDeAgendamentosService } from '../http/services/api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule,
    HttpClientModule
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'], // Corrigido para `styleUrls`
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: APIDeAgendamentosService ) {
    this.loginForm = this.fb.group({
      username: ['rafael@email.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  onSubmit() {
    console.log('Submit acionado');
    if (this.loginForm.valid) {
      const dto = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      this.apiService.authControllerLogin(dto).subscribe({
        next: (response: any) => {
          console.log('Login bem-sucedido:', response);
        },
        error: (error: any) => {
          console.error('Erro de login:', error);
        },
        complete: () => {
          console.log('Requisição de login concluída.');
        },
      });
    }
  }
}
