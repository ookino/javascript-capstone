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

describe('Comments Counter function Test', () => {
  const commentArray = [
    {
      commentID: 1204,
      mealName: 'Bread and Butter Pudding',
      commentDescription: 'This Food Is Very Awesome. I Love It',
    },
    {
      commentID: 1790,
      mealName: 'Bakewell tart',
      commentDescription: 'Awesome Food',
    },
  ];
  test('should return comment array length of 2', () => {
    const commentLength = counter.comments(commentArray);
    expect(commentLength).toBe(2);
  });

  test('should return comment array length of 1 ', () => {
    commentArray.push(
      {
        commentID: 2080,
        mealName: 'Beef Wellington',
        commentDescription: 'I Would Like To Eat This',
      },
      {
        commentID: 2190,
        mealName: 'this is a nice meal',
        commentDescription: 'no comment description',
      },
    );
    const commentLength = counter.comments(commentArray);
    expect(commentLength).toBe(4);
  });
});

describe('Test for Reservations Counter function', () => {
  const reserveArray = [
  ];
  test('should return reservations array length of 0', () => {
    const reserveLength = counter.meals(reserveArray);
    expect(reserveLength).toBe(0);
  });
  test('should return meals array length of 2 ', () => {
    reserveArray.push(
      {
        mealID: 1,
        reserveName: 'Lilian',
        reserveStartDate: '2021-02-01',
        reserveEndDate: '2021-02-02',
      },
      {
        mealID: 2,
        reserveName: 'Yvonne',
        reserveStartDate: '2021-02-03',
        reserveEndDate: '2021-02-04',
      },
    );
    const reserveLength = counter.meals(reserveArray);
    expect(reserveLength).toBe(2);
  });
  test('should return meals array length of 3 ', () => {
    reserveArray.push(
      {
        mealID: 3,
        reserveName: 'Moraa',
        reserveStartDate: '2021-02-14',
        reserveEndDate: '2021-02-15',
      },
    );
    const reserveLength = counter.meals(reserveArray);
    expect(reserveLength).toBe(3);
  });
});
