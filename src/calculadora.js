export function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('ERROR: los valores deben ser numéricos');
    }

    return a + b;
}