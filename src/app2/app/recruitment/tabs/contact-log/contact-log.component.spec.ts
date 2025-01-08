import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLogComponent } from './contact-log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactLogComponent', () => {
  let component: ContactLogComponent;
  let fixture: ComponentFixture<ContactLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLogComponent, BrowserAnimationsModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
