import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';

import { ListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageComponent ],
      providers: [ UserService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService', () => {
    const mySpy = spyOn(fixture.componentInstance, 'ngOnInit');

    component.ngOnInit();

    expect(mySpy).toHaveBeenCalledTimes(1);
  });


});
