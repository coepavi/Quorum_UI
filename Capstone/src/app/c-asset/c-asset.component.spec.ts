import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAssetComponent } from './c-asset.component';

describe('CAssetComponent', () => {
  let component: CAssetComponent;
  let fixture: ComponentFixture<CAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
