import { useState } from "react";
import { constructFormState, constructFormWarning } from "../utils/defaults";
import { taskPriority } from "../utils/enums";
import Warning from "./Warning";

const initialState = {
    formState: constructFormState(),
    formWarning: constructFormWarning()
}

const Form = ({ addTask }) => {
    const [formState, setFormState] = useState(initialState.formState);
    const [formWarning, setFormWarning] = useState(initialState.formWarning);

    const handleChange = ({ target: { name, value } }) => {
        setFormState((prevState) => ({ ...prevState, [name]: value.trimStart() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formState.title) {
            setFormWarning({ display: true, text: "Enter title!" });
            return;
        }

        addTask(formState);
        setFormState(initialState.formState);
        setFormWarning(initialState.formWarning);
    }


    return (
        <section>
            <div className="section-top">
                <h2>Add todo</h2>
            </div>
            <form className="section-content" onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" onChange={handleChange} value={formState.title} maxLength="30"></input>
                <textarea name="description" placeholder="Description" onChange={handleChange} value={formState.description}></textarea>
                <select name="priority" onChange={handleChange} value={formState.priority}>
                    <option>{taskPriority.LOW}</option>
                    <option>{taskPriority.MEDIUM}</option>
                    <option>{taskPriority.HIGH}</option>
                </select>
                <input type="submit" className="section-button"></input>
            </form>
            <Warning warning={formWarning} />
        </section>
    )
};

export default Form;