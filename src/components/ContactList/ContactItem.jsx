import PropTypes from "prop-types";
import { Item, Button } from "components/ContactList/ContactList.styled";

export const ContactItem = ({ contact, onDelete }) => { 
    const { id, name, number } = contact;
    const handleDelete = () => {
        onDelete(id);
    };
    
    return (
        <Item>
            {name} {number}
            <Button
                type="button"
                onClick={handleDelete}>
                Delete
            </Button>
        </Item>
    )
}

ContactItem.propType = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDelete: PropTypes.func.isRequired,
};