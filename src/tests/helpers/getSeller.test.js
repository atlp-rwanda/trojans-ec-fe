import { getSeller } from "../../helpers/getSeller";
describe('getSeller', () => {
  const sellers = [
    { id: 1, name: 'Seller 1' },
    { id: 2, name: 'Seller 2' },
    { id: 3, name: 'Seller 3' },
  ];

  it('should return the correct seller object when found', () => {
    expect(getSeller(sellers, 2)).toEqual({ id: 2, name: 'Seller 2' });
  });

  it('should return "Anonymous" when seller is not found', () => {
    expect(getSeller(sellers, 4)).toEqual({"name": "Anonymous"});
  });
});