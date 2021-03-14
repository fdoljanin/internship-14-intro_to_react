import { useState } from "react";

const Form = ({ addTask }) => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        priority: "Low"
    });

    const [formWarning, setFormWarning] = useState({ class: "element--hidden", text: "" });

    const handleChange = ({ target: { name, value } }) => {
        setFormState((prevState) => ({ ...prevState, [name]: value.trim() }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formState.title === "") {
            setFormWarning({ class: "form-warning", text: "Enter title!" });
            return;
        }
        
        addTask(formState);
        setFormState({ title: "", description: "", priority: "Low" });
        setFormWarning({class:"element--hidden", text:""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="section-top">
                <h2>Add todo</h2>
            </div>
            <div className="section-content">
                <input name="title" placeholder="Title" onChange={handleChange} value={formState.title}></input>
                <textarea name="description" placeholder="Description" onChange={handleChange} value={formState.description}></textarea>
                <select name="priority" onChange={handleChange} value={formState.priority}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <input type="submit" className="section-button"></input>
            </div>
            <div className={formWarning.class}>
                <p>{formWarning.text}</p>
            </div>
        </form>
    )
};

export default Form;