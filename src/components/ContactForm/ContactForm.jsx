import { useState  } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Form, Label, LabelName, Input, Button } from "components/ContactForm/ContactFotm.styled";

export const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            id: nanoid(),
            name,
            number,
        };
        onSubmit(data);

        setName("");
        setNumber("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <LabelName>
                    Name  
                </LabelName>
                <Input
                    type="text"
                    name="name"
                    value={name} 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Label>
                <LabelName>
                    Number
                </LabelName>        
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </Label>
            <Button 
                type="submit">
                Add contact
            </Button>
        </Form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};