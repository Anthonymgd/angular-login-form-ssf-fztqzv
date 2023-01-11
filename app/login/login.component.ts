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

  form!: FormGroup; // No provee una inicialización

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form) {
    console.log(this.user, form.form._value);
  }

  private buildForm() {
    // Enviar todos los campos con sus validaciones
    this.form = this.formBuilder.group({
      // Creamos cada uno de los controladores
      passCtrol: new FormControl('', [Validators.required]),
      emailCtrol: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.router.navigate(['/home']);
    } else {
      console.log(this.form);
      this.form.markAsTouched();

    }
  }

  get passCtrol() {
    return this.form.get('passCtrol');
  }

  get emailCtrol() {
    return this.form.get('emailCtrol');
  }
}
