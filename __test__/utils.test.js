import itemCounter from '../src/utils';

it('should return a length greather than 0', () => {
  const items = [
    {
      id: 1,
    },
  ];
  const result = itemCounter(items);
  expect(result).toBeGreaterThan(0);
});