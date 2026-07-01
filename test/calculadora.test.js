import test from 'node:test';
import assert from 'node:assert/strict';

import { suma } from '../src/calculadora.js';

test('TDD: suma dos números positivos', () => {
    assert.equal(suma(1, 1), 2);
});

test('TDD: suma un número negativo y uno positivo', () => {
    assert.equal(suma(-1, 1), 0);
    assert.equal(suma(1, -1), 0);
});

test('TDD: suma dos números negativos', () => {
    assert.equal(suma(-1, -1), -2);
});

test('TDD: genera error cuando un valor no es numérico', () => {
    assert.throws(() => suma('a', 0), Error);
});