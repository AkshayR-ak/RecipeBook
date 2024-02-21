const Validation = (values) => {
    let errors = {}

    if (!values.email) {
        errors.email = "Email Required"
    }

    if (!values.password) {
        errors.password = "Password Required"
    }
    else if (values.password.length < 9) {
        errors.password = "Password must be more than 8 characters"
    }

    return errors;
}

export default Validation