import { obtenerRobots } from './arrays';
describe('Prueba de arrays', () => {
  it('Debe de retorar al menos 3 robots', () => {
     const res = obtenerRobots();
      expect( res.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de existir Mazinger y Grendizer', () => {
    const res = obtenerRobots();
    expect( res).toContain('Mazinger Z');
    expect( res).toContain('Grendizer');
 });
});
