import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMainComponent } from './person-main.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonMainComponent', () => {
  let component: PersonMainComponent;
  let fixture: ComponentFixture<PersonMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonMainComponent, HttpClientTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
