import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearNotaPage } from './crear-nota.page';

describe('CrearNotaPage', () => {
  let component: CrearNotaPage;
  let fixture: ComponentFixture<CrearNotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
