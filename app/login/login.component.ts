import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};

  loginForm: FormGroup; // No provee una inicialización

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(loginForm) {
    console.log(this.user, this.loginForm.value);
  }

  private buildForm() {
    // Enviar todos los campos con sus validaciones
    this.loginForm = this.formBuilder.group({
      // Creamos cada uno de los controladores
      passCtrol: new FormControl('', [Validators.required]),
      emailCtrol: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      console.log(value);
      this.router.navigate(['/home']);
    } else {
      console.log(this.loginForm);
      this.loginForm.markAsTouched();
    }
  }

  get passCtrol() {
    return this.loginForm.get('passCtrol');
  }

  get emailCtrol() {
    return this.loginForm.get('emailCtrol');
  }
}
