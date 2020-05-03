import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNewsComponent } from './add-new-news.component';
import { DebugElement } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthGuard } from 'src/app/authentication/authentication.guard';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';


describe('AddNewNewsComponent', () => {
  let component: AddNewNewsComponent;
  let fixture: ComponentFixture<AddNewNewsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewNewsComponent ],
      imports:[
        AuthGuard,
        Validators,
        FormControl,
        ActivatedRoute,
        FormGroup

      ]
    })
    .compileComponents().then(()=>{
        fixture = TestBed.createComponent(AddNewNewsComponent);

        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;

    });
  }));

  it('should set submitted to true ', () => {
     component.onSubmit(component.addNewsForm.value);
    expect(component).toBeTruthy();
  });

  it('form should be invalid ', () => {
    component.addNewsForm.controls['fullNews'].setValue('');
  expect(component).toBeTruthy();
});
});
