// ComponentFixture para navegar por el dom
import {TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '../../../../node_modules/@angular/http';


xdescribe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
   TestBed.configureTestingModule({
        declarations: [ MedicoComponent],
        imports: [ HttpClientModule ],
        providers: [MedicoService]

       });

     fixture = TestBed.createComponent(MedicoComponent);
      component = fixture.componentInstance;
   });




    it('Debe de crearse el componente', () => {
      expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

      const nombre = 'Juan';
      const res = component.saludarMedico(nombre);

      expect(res).toContain( nombre);


    });
});
