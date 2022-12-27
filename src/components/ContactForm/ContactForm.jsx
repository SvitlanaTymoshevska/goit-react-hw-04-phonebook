import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { Form, Label, LabelName, Input, Button } from "components/ContactForm/ContactFotm.styled";

export class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    
    state = {
        name: "",
        number: "",
    };

    onChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {name, number} = this.state;
        const data = {
            id: nanoid(),
            name,
            number,
        };
        this.props.onSubmit(data);

        this.setState({name: "", number: ""});
    };

    render() {
        const {name, number} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                    />
                </Label>
                <Button 
                    type="submit">
                    Add contact
                </Button>
            </Form>
        );
    };
};