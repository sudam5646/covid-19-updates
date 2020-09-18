import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistGraphComponent } from './dist-graph.component';

describe('DistGraphComponent', () => {
  let component: DistGraphComponent;
  let fixture: ComponentFixture<DistGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
