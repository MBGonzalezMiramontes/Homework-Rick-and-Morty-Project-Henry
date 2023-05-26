export default (data) => {
    let errors = {};

    if (!data.email.includes('@')){
        errors.invalidEmail = 'Email inválido'
    }
    if(!data.email){
        errors.noEmail = 'No puede estar vacío'
    }
    if(data.email.length > 35){
        errors.emailLength = 'Debe tener menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.paswwordNumber = 'Debe tener al menor un número'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.passwordLength = 'Debe tener entre 6 y 10 caracteres'
    }
    return errors
};
