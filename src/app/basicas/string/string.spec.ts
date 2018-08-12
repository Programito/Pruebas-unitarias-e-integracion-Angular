import { mensaje } from './string';
// // agrupar pruebas
// describe('Pruebas de String');
// // una prueba especifica
// it('Debe de regresar un string');

describe('Pruebas de strings', () => {
   it('Debe de regresar  string', () => {

       const resp = mensaje('Juan');
       expect(typeof resp).toBe('string');

   });

   it('Debe de retornar un saludo con el nombre enviado', () => {

    const nombre = 'Juan';
    const resp = mensaje(nombre);
    // toBe exactamente
    // expect(resp).toBe('Saludos ' + nombre);
    expect(resp).toContain(nombre);

  });


});
