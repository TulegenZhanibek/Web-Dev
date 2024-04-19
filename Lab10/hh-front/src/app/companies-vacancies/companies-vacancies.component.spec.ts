import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesVacanciesComponent } from './companies-vacancies.component';

describe('CompaniesVacanciesComponent', () => {
  let component: CompaniesVacanciesComponent;
  let fixture: ComponentFixture<CompaniesVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniesVacanciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
