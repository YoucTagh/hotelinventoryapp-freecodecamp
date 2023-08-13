import { Claculator } from './test.service';
describe('test.service', () => {
  it('should add two numbers', () => {
    const service = new Claculator();
    expect(service.add(2, 2)).toBe(4);
  });
});
