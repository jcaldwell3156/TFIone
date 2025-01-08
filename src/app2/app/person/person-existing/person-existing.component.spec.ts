import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonExistingComponent } from './person-existing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PersonExistingComponent', () => {
  let component: PersonExistingComponent;
  let fixture: ComponentFixture<PersonExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonExistingComponent, BrowserAnimationsModule, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
