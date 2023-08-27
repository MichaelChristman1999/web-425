/**
 * Title: sign-in.component.spec.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary testing modules and the SignInComponent
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
