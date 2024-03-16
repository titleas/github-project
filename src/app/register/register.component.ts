import { Component , OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // นำเข้า MatInputModule
import { MatSelectModule } from '@angular/material/select'; // นำเข้า MatSelectModule
import { AuthService } from '../services/auth.service';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatFormFieldModule,
            MatButtonModule,RouterModule,ReactiveFormsModule,MatInputModule,MatSelectModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private authService: AuthService) {
    this.signupForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      avatar: new FormControl("", [Validators.required, Validators.minLength(2)]),//ต้องมีความยาวอย่างน้อย 2 ตัวอักษร
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),//ตรวจสอบค่าที่รับมามีรูปแบบของอีเมล์
      password: new FormControl("", [
        Validators.required, 
        Validators.minLength(7)]),
    })
  }

  signup(): void {
    this.authService
    .signup(this.signupForm.value)
    .subscribe((msg) => console.log(msg));
  }

}



