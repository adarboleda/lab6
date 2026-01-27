const { factorial, fibonacci } = require('./math');

describe('Función factorial', () => {
  test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(999); // Error intencional
  });

  test('Factorial de 10 debe ser 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('Factorial de número negativo debe lanzar error', () => {
    expect(() => factorial(-1)).toThrow(
      'El factorial no está definido para números negativos',
    );
  });
});

describe('Función fibonacci', () => {
  test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('Fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('Fibonacci de 5 debe ser 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('Fibonacci de 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('Fibonacci de número negativo debe lanzar error', () => {
    expect(() => fibonacci(-1)).toThrow(
      'El fibonacci no está definido para números negativos',
    );
  });
});
