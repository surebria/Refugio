import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCitasComponent } from './pagina-citas.component';

describe('PaginaCitasComponent', () => {
  let component: PaginaCitasComponent;
  let fixture: ComponentFixture<PaginaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
