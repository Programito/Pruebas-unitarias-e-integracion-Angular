import { Jugador } from './clase';


describe('Pruebas de clase', () => {

 let jugador;

 beforeEach(
   () => {
    jugador = new Jugador();
    });

 /*beforeAll();
 beforeEeach();
 afterAll();
 afterEeach();*/

 it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
    // const juador = new Jugador();
    const resp = jugador.recibeDmg(20);
    expect(resp).toBe(80);
 });

 it('Debe retornar 0 de hp, si recibe 100 de daño o mas', () => {
  // const juador = new Jugador();
  const resp = jugador.recibeDmg(101);
  expect(resp).toBe(0);
});
});
