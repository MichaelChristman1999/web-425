/**
 * Title: my-image.component.spec.ts
 * Author: Michael Christman
 * Date: August 24, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Add Routing video by Professor Krasso (https://www.youtube.com/watch?v=2nuUKwyaCzU)
 * Angular Tutorial for Beginners: How to Create a Sign-In Form video by Professor Krasso (https://www.youtube.com/watch?v=jBcIjOtctIY)
 * Angular Tutorial for Beginners: How to How to Pass Data to Components Using Query Params by Professor Krasso (https://www.youtube.com/watch?v=PDWE7R9ABcA)
 */

// Import necessary testing modules and the MyImageComponent
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
