import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CraeteUser() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        inputs.option = "Salvar dados";
        // console.log(inputs);
        axios.post("http://localhost:8888/web/react/react-crud/php/api.php", inputs).then(function(response){
            // console.log(response)
            if (response.data.status === 1) {
                alert(response.data.msg)
            }
            navigate("/");
        })
    }
    return (
        <div>
            <h1>Create User</h1>

            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type="text" name="name" onChange={handleChange}/>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} />

                <button>Save</button>
            </form>
        </div>
    )
}