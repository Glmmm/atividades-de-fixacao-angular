import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XhurrascoComponent } from './xhurrasco.component';

describe('XhurrascoComponent', () => {
  let component: XhurrascoComponent;
  let fixture: ComponentFixture<XhurrascoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XhurrascoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XhurrascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
