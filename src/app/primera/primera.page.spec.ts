import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeraPage } from './primera.page';

describe('PrimeraPage', () => {
  let component: PrimeraPage;
  let fixture: ComponentFixture<PrimeraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
