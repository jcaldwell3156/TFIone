import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedservicesComponent } from './authorizedservices.component';

describe('AuthorizedserviesComponent', () => {
  let component: AuthorizedservicesComponent;
  let fixture: ComponentFixture<AuthorizedservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizedservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorizedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
