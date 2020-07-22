import React, {useState} from "react";
import "./login.scss";
import textData from "../../content/auth.yaml";
import * as yup from "yup"

const schema = yup.object().shape({
    email: yup.string("Please enter an email").email("Invalid email").required("Please enter an email"),
    password: yup.string("Password required").required("Password required")
});

const Login = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const [formErrors, setFormErrors] = useState({})
    const [formBlur, setFormBlur] = useState({})

    const validate = async () => {
        const isValid = await schema.isValid(formState);

        if (isValid) {
            setFormErrors({});
            return true;
        }

        try {
            await schema.validate(formState, { abortEarly: false })
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

    return <div className="LoginContainer">
        <div className="LoginBox">
            <div className="Title">{textData.login.title}</div>
            <div className="Description">{textData.login.description}</div>

            <div className="Form">
                <div className="InputGroup">
                    <div className="Label">
                        {textData.login.email}
                    </div>
                    <input name="email" type="text" className={`Input ${formErrors["email"] ? 'Error' : ''}`} onBlur={onBlur} onChange={onChange}/>
                    {formErrors["email"] && formBlur["email"] && <div className="ErrorText">{formErrors["email"]}</div>}
                </div>
                <div className="InputGroup">
                    <div className="Label">
                        {textData.login.password}
                    </div>
                    <input name="password" type="text" className={`Input Bottom ${formErrors["password"] ? 'Error' : ''}`} onBlur={onBlur} onChange={onChange}/>
                    {formErrors["password"] && formBlur["password"] && <div className="ErrorText">{formErrors["password"]}</div>}
                </div>
                <a href="#" className="ForgotPassword">{textData.login.forgotPassword}</a>
            </div>

            <div className="Button" onClick={validate}>{textData.login.button}</div>
            <a href="#" className="NoAccount">{textData.login.noAccount}</a>
        </div>
    </div>
}

export default Login;
