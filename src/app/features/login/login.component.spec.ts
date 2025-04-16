import { AuthService } from './../../../../projects/auth/src/lib/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service :AuthService;

  beforeEach(()=>{
   service = TestBed.inject(AuthService) ;

  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent,ReactiveFormsModule ,importProvidersFrom(HttpClientTestingModule)],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize form with email and password controls', () => {
   expect(component.loginForm.contains('email')).toBeTrue();
   expect(component.loginForm.contains('password')).toBeTrue();
 });


 it('should mark form as invalid when empty', () => {
 
  expect( component.loginForm.value).toBeFalse()
});



});
