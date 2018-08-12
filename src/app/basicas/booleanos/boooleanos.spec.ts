import { usuarioIngresado } from "./booleanos";


describe('Pruebas de Boooleaos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
});
