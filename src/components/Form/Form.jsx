import { useState} from 'react';

const Form = () => {

    const [userData, setUserData] = useState ({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState ({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.targer.name]: event.target.value
        })

    };

    return (

            <form>
                <label htmlFor="email">Email: </label>
                <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                />                

                <label htmlFor="password">Contraseña: </label>
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                />

                <button type="submit">Iniciar seción</button>
            </form>
    )

};

export default Form;