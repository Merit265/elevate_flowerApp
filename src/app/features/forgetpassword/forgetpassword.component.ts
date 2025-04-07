import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../projects/auth/src/public-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  resetForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

  });

  auth = inject(AuthService)

  resetPass(form: any) {
    console.log(form);
    

    if (form.valid) {
      this.auth.forgotPassword(form.value).subscribe({
        next: (res) => { console.log(res); },
        error: (err) => {
          console.log(err);
        }


      })

    }else{
      console.log('invalid');
      
    }

  }


}
