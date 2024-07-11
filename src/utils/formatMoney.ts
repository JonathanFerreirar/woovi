/**
 * Format a numbr for real BRL format
 * @example
 * // returns R$ 5,00
 * formatValue(5);
 * @example
 * // returns 30.000,00
 * formatValue(30000);
 * @returns {Number} Returns the value formated in BRL format
 */

export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
