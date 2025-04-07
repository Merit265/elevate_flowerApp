import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForgetpasswordComponent } from './features/forgetpassword/forgetpassword.component';

export const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'register', component: RegisterComponent },
 { path: 'login', component: LoginComponent },
 { path: 'resetpassword', component: ForgetpasswordComponent },
];
