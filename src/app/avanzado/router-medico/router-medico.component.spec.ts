import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs/Subject';


// simular el navigate
class FakeRouter {
  navigate(params) {}
}


class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty();
  // Observables no puedes hacerles push
  // se utiliza el subject
  private subject = new Subject();

  push (valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        // Router,
        {provide: Router, useClass: FakeRouter},
        // ActivatedRoute
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('Debe de redireccionar a Médico cuando se guarde', () => {
     const router = TestBed.get(Router);
     const spy = spyOn(router, 'navigate');

     component.guardarMedico();

     expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
      component = fixture.componentInstance;
      // poder utilizar las funciones del servicios
      const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
      activatedRoute.push({id: 'nuevo'});
      expect(component.id).toBe('nuevo');
  });


});
