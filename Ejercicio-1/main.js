class AgeValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeValidationError";
    }
}



const [ edad ] = process.argv.slice(2);

try {
    if (isNaN(edad)) throw new AgeValidationError("El elemento no es númerico.");
    else if (edad < 18 && edad > 0) throw new AgeValidationError("El usuario es menor de edad, no es elegible para votar.");
    else if (edad < 0) throw new AgeValidationError("No se permiten números negativos.");
    else if (edad > 100) throw new AgeValidationError("El usuario queda fuera del rango de edad, no es elegible para votar.");
    else console.log("Puede votar");
} catch (err) {
    console.log(err.stack)
} finally {
    console.log("La edad está validada.");
}
