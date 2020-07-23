const getValidationMethods = (validationSchema, formErrors, setFormErrors, formState, setFormState, formBlur, setFormBlur) => {
    const validate = async () => {
        const isValid = await validationSchema.isValid(formState);

        if (isValid) {
            setFormErrors({});
            return true;
        }

        try {
            await validationSchema.validate(formState, {abortEarly: false})
        } catch (e) {
            const errors = {}
            e.inner.forEach(error => {
                errors[error.path] = error.message
            })
            setFormErrors(errors)
        }

        return false;
    }

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });

        validate();
    }

    const onBlur = (e) => {
        setFormBlur({
            ...formBlur,
            [e.target.name]: true
        });

        validate();
    }

    return {
        validate,
        onChange,
        onBlur
    }
}

export default getValidationMethods;
