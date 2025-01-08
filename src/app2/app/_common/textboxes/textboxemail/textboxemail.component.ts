import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'tfi-textboxemail',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './textboxemail.component.html',
  styleUrl: './textboxemail.component.scss'
})
export class TextboxemailComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  @Input({required: true}) parentFormGroup!: FormGroup;
  @Input() appearanceName!: MatFormFieldAppearance

  ngOnInit(): void {
    this.parentFormGroup.addControl('email', this.emailFormControl);
  }
}
