import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNosotrosComponent } from './pagina-nosotros.component';

describe('PaginaNosotrosComponent', () => {
  let component: PaginaNosotrosComponent;
  let fixture: ComponentFixture<PaginaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
