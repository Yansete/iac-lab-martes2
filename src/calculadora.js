const esNumero = (valor) => typeof valor === 'number';

export function suma(a, b) {
    if (!esNumero(a) || !esNumero(b)) {
        throw new Error('ERROR: los valores deben ser numéricos');
    }

    return a + b;
}