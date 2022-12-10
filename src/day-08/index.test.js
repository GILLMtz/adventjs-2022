const checkPart = require('./index');

test('should true with "uwu"', () => {
    const result = checkPart("uwu");
    expect(result).toBe(true);// "uwu" es un palíndromo sin eliminar ningún carácter */
});

test('should true with "miidim"', () => {
    /*"miidim" puede ser un palíndromo después 
    de eliminar la primera "i" ya que "midim" 
    es un palíndromo */
    const result = checkPart("miidim");    
    expect(result).toBe(true);
});
test('should  false with "midu"', () => {
    /*"midu" no puede ser un palíndromo después
     de eliminar un carácter */
    const result = checkPart("midu");
    expect(result).toBe(false);
});

test('should  false with ""', () => {
    const result = checkPart("");
    expect(result).toBe(false);
});


it('should true with "zzzoonzzz"', () => {
    const result = checkPart("zzzoonzzz");
    expect(result).toBe(true);
});

it('should true with "yolooloy"', () => {
    const result = checkPart("yolooloy");
    expect(result).toBe(true);
});

it('should true with "lolol"', () => {
    const result = checkPart("lolol");
    expect(result).toBe(true);
});


