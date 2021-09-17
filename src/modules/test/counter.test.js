import counter from '../counter';

describe('Meals Counter function Test', () => {
  const mealArray = [
    {
      mealID: 1234,
      mealName: 'Baked beans',
      mealDescription: 'it is a canned meal, no need for a description',
    },
    {
      mealID: 1890,
      mealName: 'Fried Rice',
      mealDescription: 'Just fry the rice',
    },
  ];
  test('should return meals array length of 2', () => {
    const mealLength = counter.meals(mealArray);
    expect(mealLength).toBe(2);
  });

  test('should return meals array length of 5 ', () => {
    mealArray.push(
      {
        mealID: 2040,
        mealName: 'Another meal',
        mealDescription: 'Unfortunately there is no description',
      },
      {
        mealID: 2990,
        mealName: 'this is a nice meal',
        mealDescription: 'Unfortunately there is no description',
      },
    );
    const mealLength = counter.meals(mealArray);
    expect(mealLength).toBe(4);
  });
});
