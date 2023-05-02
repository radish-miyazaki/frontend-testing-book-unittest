describe('boolean', () => {
  test('truthy values', () => {
    expect(1).toBeTruthy();
    expect(true).toBeTruthy();
    expect('1').toBeTruthy();
    expect(0).not.toBeTruthy();
    expect('').not.toBeTruthy();
    expect(false).not.toBeTruthy();
  })

  test('falsy values', () => {
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
    expect(1).not.toBeFalsy();
    expect(true).not.toBeFalsy();
    expect('1').not.toBeFalsy();
  })

  test('null and undefined', () => {
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(1).not.toBeNull();
    expect(1).not.toBeUndefined();
  })
})

describe('number', () => {
  const value = 2 + 2;

  test('value is equal to expected', () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  test('value is greather than expected', () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  })

  test('value is less than expected', () => {
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  })

  test('decimal calc is not precise', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  })

  test('compare till specific decimal place', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
  })
})

describe('string', () => {
  const str = 'Hello World!';
  test('value is equal to expected', () => {
    expect(str).toBe('Hello World!');
    expect(str).toEqual('Hello World!');
  })

  test('toContain', () => {
    expect(str).toContain('World');
    expect(str).not.toContain('world');
  })

  test('toMatch', () => {
    expect(str).toMatch(/World/);
    expect(str).not.toMatch(/world/);
  })

  test('toHaveLength', () => {
    expect(str).toHaveLength(12);
    expect(str).not.toHaveLength(11);
  })

  const obj = { status: 200, message: str };
  test('stringContaining', () => {
    expect(obj).toEqual({ status: 200, message: expect.stringContaining('World') });
  })

  test('stringMatching', () => {
    expect(obj).toEqual({ status: 200, message: expect.stringMatching(/World/) });
  })
})

describe('array', () => {
  const tags = ['Jest', 'Storybook', 'Playwright', 'React', 'Next.js'];
  test('toContain', () => {
    expect(tags).toContain('Jest');
    expect(tags).not.toContain('Cypress');
  })

  test('toHaveLength', () => {
    expect(tags).toHaveLength(5);
    expect(tags).not.toHaveLength(4);
  })

  const article1 = { author: 'taro', test: 'Testing Next.js'};
  const article2 = { author: 'jiro', test: 'Storybook play function'};
  const article3 = { author: 'hanako', test: 'Visual Regression Testing'};
  const articles = [article1, article2, article3];

  test('toContainEqual', () => {
    expect(articles).toContainEqual(article1);
  })

  test('arrayContaining', () => {
    expect(articles).toEqual(expect.arrayContaining([article1, article2]));
  })
})

describe('object', () => {
  const author = { name: 'Taro Yamada', age: 30 };
  test('toMatchObject', () => {
    expect(author).toMatchObject({ name: 'Taro Yamada', age: 30 });
    expect(author).toMatchObject({ name: 'Taro Yamada' });
    expect(author).not.toMatchObject({ gender: 'man' });
  })

  test('toHaveProperty', () => {
    expect(author).toHaveProperty('name');
    expect(author).not.toHaveProperty('gender');
  })

  const article = {
    title: 'Testing with Jest',
    author: {
      name: 'Taro Yamada',
      age: 30
    }
  }

  test('objectContaining', () => {
    expect(article).toEqual({
      title: 'Testing with Jest',
      author: expect.objectContaining({ name: 'Taro Yamada' })
    });

    expect(article).toEqual({
      title: 'Testing with Jest',
      author: expect.not.objectContaining({ gender: 'man' })
    });
  })
})
