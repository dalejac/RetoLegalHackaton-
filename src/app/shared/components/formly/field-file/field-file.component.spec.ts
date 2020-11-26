import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFileComponent } from './field-file.component';

describe('FieldFileComponent', () => {
  let component: FieldFileComponent;
  let fixture: ComponentFixture<FieldFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
