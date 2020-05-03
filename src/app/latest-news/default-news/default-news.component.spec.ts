import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNewsComponent } from './default-news.component';

describe('DefaultNewsComponent', () => {
  let component: DefaultNewsComponent;
  let fixture: ComponentFixture<DefaultNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render the title in a h3 tag', () => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h3').textContent).toContain('Please select a News!');
  // });
});
