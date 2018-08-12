import {RUTAS} from './app.routes';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';

describe( 'Rutas principales', () => {
  it( 'Debe de existir la runa /medico/:id', () => {
    expect(RUTAS).toContain({
         path: 'medico/:id',
         component: MedicoComponent
    });
  });
});