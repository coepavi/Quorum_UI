import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAssetComponent } from './v-asset.component';

describe('VAssetComponent', () => {
  let component: VAssetComponent;
  let fixture: ComponentFixture<VAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
