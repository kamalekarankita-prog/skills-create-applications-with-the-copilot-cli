/**
 * Comprehensive unit tests for calculator.js
 * Tests all four basic arithmetic operations with edge cases
 */

const { calculate } = require('../calculator');

describe('Calculator - Basic Arithmetic Operations', () => {
  
  describe('Addition Tests', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should add two negative numbers: -5 + -3 = -8', () => {
      expect(calculate(-5, '+', -3)).toBe(-8);
    });

    test('should add positive and negative numbers: 10 + -3 = 7', () => {
      expect(calculate(10, '+', -3)).toBe(7);
    });

    test('should add decimals: 1.5 + 2.5 = 4', () => {
      expect(calculate(1.5, '+', 2.5)).toBe(4);
    });

    test('should add with zero: 5 + 0 = 5', () => {
      expect(calculate(5, '+', 0)).toBe(5);
    });

    test('should add zero + zero: 0 + 0 = 0', () => {
      expect(calculate(0, '+', 0)).toBe(0);
    });

    test('should add large numbers: 999999 + 1 = 1000000', () => {
      expect(calculate(999999, '+', 1)).toBe(1000000);
    });
  });

  describe('Subtraction Tests', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(calculate(5, '-', 10)).toBe(-5);
    });

    test('should subtract two negative numbers: -5 - -3 = -2', () => {
      expect(calculate(-5, '-', -3)).toBe(-2);
    });

    test('should subtract decimals: 5.5 - 2.3', () => {
      expect(calculate(5.5, '-', 2.3)).toBeCloseTo(3.2, 1);
    });

    test('should subtract with zero: 5 - 0 = 5', () => {
      expect(calculate(5, '-', 0)).toBe(5);
    });

    test('should subtract same values: 7 - 7 = 0', () => {
      expect(calculate(7, '-', 7)).toBe(0);
    });

    test('should subtract negative from positive: 10 - (-3) = 13', () => {
      expect(calculate(10, '-', -3)).toBe(13);
    });
  });

  describe('Multiplication Tests', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should multiply positive by negative: 5 * -3 = -15', () => {
      expect(calculate(5, '*', -3)).toBe(-15);
    });

    test('should multiply two negative numbers: -5 * -4 = 20', () => {
      expect(calculate(-5, '*', -4)).toBe(20);
    });

    test('should multiply by zero: 7 * 0 = 0', () => {
      expect(calculate(7, '*', 0)).toBe(0);
    });

    test('should multiply by one: 15 * 1 = 15', () => {
      expect(calculate(15, '*', 1)).toBe(15);
    });

    test('should multiply decimals: 2.5 * 4 = 10', () => {
      expect(calculate(2.5, '*', 4)).toBe(10);
    });

    test('should multiply large numbers: 100 * 100 = 10000', () => {
      expect(calculate(100, '*', 100)).toBe(10000);
    });

    test('should multiply fractional numbers: 0.5 * 0.5 = 0.25', () => {
      expect(calculate(0.5, '*', 0.5)).toBeCloseTo(0.25, 2);
    });
  });

  describe('Division Tests', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should divide positive by negative: 10 / -2 = -5', () => {
      expect(calculate(10, '/', -2)).toBe(-5);
    });

    test('should divide two negative numbers: -20 / -4 = 5', () => {
      expect(calculate(-20, '/', -4)).toBe(5);
    });

    test('should divide by one: 7 / 1 = 7', () => {
      expect(calculate(7, '/', 1)).toBe(7);
    });

    test('should divide resulting in decimal: 7 / 2 = 3.5', () => {
      expect(calculate(7, '/', 2)).toBe(3.5);
    });

    test('should divide decimal by integer: 5.5 / 2 = 2.75', () => {
      expect(calculate(5.5, '/', 2)).toBeCloseTo(2.75, 2);
    });

    test('should divide zero by number: 0 / 5 = 0', () => {
      expect(calculate(0, '/', 5)).toBe(0);
    });

    test('should divide decimal by decimal: 10.5 / 2.5 = 4.2', () => {
      expect(calculate(10.5, '/', 2.5)).toBeCloseTo(4.2, 1);
    });
  });

  describe('Edge Cases - Division by Zero', () => {
    test('should throw error when dividing by zero: 10 / 0', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing negative by zero: -5 / 0', () => {
      expect(() => calculate(-5, '/', 0)).toThrow('Error: Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero: 0 / 0', () => {
      expect(() => calculate(0, '/', 0)).toThrow('Error: Division by zero is not allowed');
    });
  });

  describe('Invalid Operator Tests', () => {
    test('should throw error for unknown operator', () => {
      expect(() => calculate(10, '&', 3)).toThrow('Invalid operator: &. Use +, -, *, /, %, ^, or sqrt');
    });

    test('should throw error for invalid operator symbol', () => {
      expect(() => calculate(5, '!', 2)).toThrow('Invalid operator: !. Use +, -, *, /, %, ^, or sqrt');
    });

    test('should throw error for empty operator', () => {
      expect(() => calculate(5, '', 2)).toThrow('Invalid operator: . Use +, -, *, /, %, ^, or sqrt');
    });
  });

  describe('Invalid Input Tests', () => {
    test('should throw error for non-numeric first operand', () => {
      expect(() => calculate('abc', '+', 5)).toThrow('Invalid input: operands must be numbers');
    });

    test('should throw error for non-numeric second operand', () => {
      expect(() => calculate(10, '+', 'xyz')).toThrow('Invalid input: operands must be numbers');
    });

    test('should throw error for both non-numeric operands', () => {
      expect(() => calculate('a', '+', 'b')).toThrow('Invalid input: operands must be numbers');
    });

    test('should handle string numbers correctly', () => {
      expect(calculate('15', '+', '5')).toBe(20);
    });

    test('should throw error for undefined operand', () => {
      expect(() => calculate(undefined, '+', 5)).toThrow('Invalid input: operands must be numbers');
    });

    test('should throw error for null operand', () => {
      expect(() => calculate(null, '+', 5)).toThrow('Invalid input: operands must be numbers');
    });
  });

  describe('Floating Point Precision Tests', () => {
    test('should handle floating point addition with precision', () => {
      expect(calculate(0.1, '+', 0.2)).toBeCloseTo(0.3, 10);
    });

    test('should handle floating point subtraction with precision', () => {
      expect(calculate(1.1, '-', 1.0)).toBeCloseTo(0.1, 10);
    });

    test('should handle very small decimals', () => {
      expect(calculate(0.001, '+', 0.002)).toBeCloseTo(0.003, 5);
    });

    test('should handle very large numbers', () => {
      expect(calculate(1000000, '*', 1000000)).toBe(1000000000000);
    });
  });

  describe('Complex Real-World Scenarios', () => {
    test('should calculate percentage: 20% of 100 = 20', () => {
      expect(calculate(100, '*', 0.2)).toBe(20);
    });

    test('should calculate discount: 100 - (100 * 0.15) = 85', () => {
      const discount = calculate(100, '*', 0.15);
      expect(calculate(100, '-', discount)).toBe(85);
    });

    test('should calculate average: (10 + 20) / 2 = 15', () => {
      const sum = calculate(10, '+', 20);
      expect(calculate(sum, '/', 2)).toBe(15);
    });

    test('should calculate compound operations', () => {
      // (50 * 2) - 30 = 70
      const step1 = calculate(50, '*', 2);
      expect(calculate(step1, '-', 30)).toBe(70);
    });
  });

  describe('Modulo Operation Tests', () => {
    test('should calculate modulo: 5 % 2 = 1', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate modulo with positive numbers: 10 % 3 = 1', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should calculate modulo: 17 % 5 = 2', () => {
      expect(calculate(17, '%', 5)).toBe(2);
    });

    test('should calculate modulo where result is zero: 10 % 5 = 0', () => {
      expect(calculate(10, '%', 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend: -10 % 3 = -1', () => {
      expect(calculate(-10, '%', 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor: 10 % -3 = 1', () => {
      expect(calculate(10, '%', -3)).toBe(1);
    });

    test('should calculate modulo with both negative: -10 % -3 = -1', () => {
      expect(calculate(-10, '%', -3)).toBe(-1);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => calculate(10, '%', 0)).toThrow('Error: Modulo by zero is not allowed');
    });

    test('should calculate modulo with large numbers: 1000 % 7 = 6', () => {
      expect(calculate(1000, '%', 7)).toBe(6);
    });

    test('should calculate modulo with decimals: 10.5 % 3 = 1.5', () => {
      expect(calculate(10.5, '%', 3)).toBeCloseTo(1.5, 5);
    });
  });

  describe('Exponentiation (Power) Operation Tests', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(calculate(5, '^', 2)).toBe(25);
    });

    test('should calculate power: 10 ^ 0 = 1', () => {
      expect(calculate(10, '^', 0)).toBe(1);
    });

    test('should calculate power: 2 ^ 0 = 1', () => {
      expect(calculate(2, '^', 0)).toBe(1);
    });

    test('should calculate power with base 1: 1 ^ 10 = 1', () => {
      expect(calculate(1, '^', 10)).toBe(1);
    });

    test('should calculate power with negative exponent: 2 ^ -2 = 0.25', () => {
      expect(calculate(2, '^', -2)).toBe(0.25);
    });

    test('should calculate power with negative base: -2 ^ 3 = -8', () => {
      expect(calculate(-2, '^', 3)).toBe(-8);
    });

    test('should calculate power with negative base and exponent: -2 ^ -2 = 0.25', () => {
      expect(calculate(-2, '^', -2)).toBe(0.25);
    });

    test('should calculate power with fractional exponent: 4 ^ 0.5 = 2', () => {
      expect(calculate(4, '^', 0.5)).toBe(2);
    });

    test('should calculate power: 3 ^ 4 = 81', () => {
      expect(calculate(3, '^', 4)).toBe(81);
    });

    test('should calculate power with large exponent: 2 ^ 10 = 1024', () => {
      expect(calculate(2, '^', 10)).toBe(1024);
    });

    test('should calculate power with decimals: 2.5 ^ 2 = 6.25', () => {
      expect(calculate(2.5, '^', 2)).toBe(6.25);
    });

    test('should calculate power with zero base: 0 ^ 5 = 0', () => {
      expect(calculate(0, '^', 5)).toBe(0);
    });
  });

  describe('Square Root Operation Tests', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(calculate(16, 'sqrt')).toBe(4);
    });

    test('should calculate square root with symbol: √25 = 5', () => {
      expect(calculate(25, '√')).toBe(5);
    });

    test('should calculate square root: √9 = 3', () => {
      expect(calculate(9, 'sqrt')).toBe(3);
    });

    test('should calculate square root: √100 = 10', () => {
      expect(calculate(100, 'sqrt')).toBe(10);
    });

    test('should calculate square root of zero: √0 = 0', () => {
      expect(calculate(0, 'sqrt')).toBe(0);
    });

    test('should calculate square root: √1 = 1', () => {
      expect(calculate(1, 'sqrt')).toBe(1);
    });

    test('should calculate square root of decimal: √2.25 = 1.5', () => {
      expect(calculate(2.25, 'sqrt')).toBe(1.5);
    });

    test('should calculate square root of decimal: √0.25 = 0.5', () => {
      expect(calculate(0.25, 'sqrt')).toBe(0.5);
    });

    test('should calculate square root of large number: √10000 = 100', () => {
      expect(calculate(10000, 'sqrt')).toBe(100);
    });

    test('should throw error for square root of negative: √-9', () => {
      expect(() => calculate(-9, 'sqrt')).toThrow('Error: Square root of negative numbers is not allowed');
    });

    test('should throw error for square root of negative: √-1', () => {
      expect(() => calculate(-1, 'sqrt')).toThrow('Error: Square root of negative numbers is not allowed');
    });

    test('should throw error for square root of negative decimal: √-0.5', () => {
      expect(() => calculate(-0.5, 'sqrt')).toThrow('Error: Square root of negative numbers is not allowed');
    });

    test('should calculate square root with precision: √2 ≈ 1.414', () => {
      expect(calculate(2, 'sqrt')).toBeCloseTo(1.414, 2);
    });

    test('should calculate square root: √0.0001 = 0.01', () => {
      expect(calculate(0.0001, 'sqrt')).toBeCloseTo(0.01, 5);
    });
  });

  describe('Advanced Operations - Complex Scenarios', () => {
    test('should calculate: (10 % 3) ^ 2 = 1', () => {
      const mod = calculate(10, '%', 3);
      expect(calculate(mod, '^', 2)).toBe(1);
    });

    test('should calculate: √(5 ^ 2) = 5', () => {
      const power = calculate(5, '^', 2);
      expect(calculate(power, 'sqrt')).toBe(5);
    });

    test('should calculate: (20 % 6) * 2 = 4', () => {
      const mod = calculate(20, '%', 6);
      expect(calculate(mod, '*', 2)).toBe(4);
    });

    test('should calculate modulo result: 25 % 7 = 4', () => {
      expect(calculate(25, '%', 7)).toBe(4);
    });

    test('should calculate power result: 2 ^ 5 = 32', () => {
      expect(calculate(2, '^', 5)).toBe(32);
    });

    test('should calculate square root: √(2 ^ 6) = 8', () => {
      const power = calculate(2, '^', 6);
      expect(calculate(power, 'sqrt')).toBe(8);
    });

    test('should calculate factorial-like: 3 ^ 3 = 27', () => {
      expect(calculate(3, '^', 3)).toBe(27);
    });

    test('should calculate: 16 % 5 + 3 operations', () => {
      const mod = calculate(16, '%', 5);
      const add = calculate(mod, '+', 3);
      expect(add).toBe(4);
    });

    test('should calculate inverse power: 2 ^ -1 = 0.5', () => {
      expect(calculate(2, '^', -1)).toBe(0.5);
    });

    test('should calculate: √144 / 2 = 6', () => {
      const sqrt = calculate(144, 'sqrt');
      expect(calculate(sqrt, '/', 2)).toBe(6);
    });
  });

});
