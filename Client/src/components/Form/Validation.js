const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


export const validation = (data) => {
    const errors = {}

    if(!regexEmail.test(data.email))
       errors.email = "Debe ser un email."
    if(!data.email)
       errors.email = "Este campo es obligatorio."
    if(data.email.length > 35)
       errors.email = "El email no puede tener más de 35 caracteres."

    if(!regexPassword.test(data.password))
       errors.password = "La contraseña debe tener mayúscula, minúscula y número."
    if(data.password.length < 6 || data.password.length > 10)
       errors.password = "La contraseña debe tener entre 6 y 10 caracteres."

    return errors;
}