import { Component, OnInit } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {};

  form!: FormGroup; // No provee una inicialización

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {}
  onSubmit() {
    this.router.navigate(['home']);
  }
  toLogin() {
    this.router.navigate(['']);
  }

  private buildForm() {
    // Enviar todos los campos con sus validaciones
    this.form = this.formBuilder.group({
      // Creamos cada uno de los controladores
      nameCtrol: new FormControl('', [Validators.required]),
      passCtrol: new FormControl('', [Validators.required]),
      dniCtrol: new FormControl('', [Validators.required]),
      celularCtrol: new FormControl('', [Validators.required]),
      dateCtrol: new FormControl('', [Validators.required]),
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
}
