import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrarNotaPage } from './borrar-nota.page';

describe('BorrarNotaPage', () => {
  let component: BorrarNotaPage;
  let fixture: ComponentFixture<BorrarNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrarNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
