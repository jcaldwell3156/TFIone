import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRaceComponent } from './person-race.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonRaceComponent', () => {
  let component: PersonRaceComponent;
  let fixture: ComponentFixture<PersonRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonRaceComponent, HttpClientTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
