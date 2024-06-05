import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBuscarComponent } from './pagina-buscar.component';

describe('PaginaBuscarComponent', () => {
  let component: PaginaBuscarComponent;
  let fixture: ComponentFixture<PaginaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
