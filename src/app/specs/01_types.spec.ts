describe('types in typescript', () => {

    describe('variables and constants in typescript', () => {

        it('using let to declare a variable', () => {
            let x;

            x = 3.14;
            expect(x).toBe(3.14);
            expect(typeof (x)).toBe('number');
            x = 'Tacos';
            expect(x).toBe('Tacos');
            expect(typeof (x)).toBe("string");

        });
        it('using let with a type in typescript', () => {
            let x: number;

            x = 3.14;
            x = 12;
            x = 123_456_789;
            x = 0xff; //hexadecimal
            x = 0b10101;
            x = 0o222;

            // x = 'Tacos';

        });

    });
});


