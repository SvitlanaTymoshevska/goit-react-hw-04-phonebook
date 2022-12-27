import PropTypes from "prop-types";
import { ContactItem } from "components/ContactList/ContactItem";

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

ContactList.propType = {
    contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
    onDelete: PropTypes.func.isRequired,
};