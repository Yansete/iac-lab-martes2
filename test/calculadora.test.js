import test from 'node:test';
import assert from 'node:assert/strict';

import { suma } from '../src/calculadora.js';

test('TDD: suma dos números positivos', () => {
    assert.equal(suma(1, 1), 2);
});