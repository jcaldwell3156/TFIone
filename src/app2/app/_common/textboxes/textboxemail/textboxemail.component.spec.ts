import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxemailComponent } from './textboxemail.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('TextboxemailComponent', () => {
  let component: TextboxemailComponent;
  let fixture: ComponentFixture<TextboxemailComponent>;
  let parentFormGroup:FormGroup;
  let emailFormControl:FormControl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextboxemailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextboxemailComponent);
    component = fixture.componentInstance;
   // parentFormGroup = component.parentFormGroup;
   // parentFormGroup.addControl('emailFormControl',emailFormControl);
   // fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
