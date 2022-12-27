import PropTypes from "prop-types";
import { Label, LabelName, Input } from "components/ContactList/ContactList.styled";


export const Filter = ({filter, onFiltre }) => { 
    return (
        <Label>
            <LabelName>
                Find contacts by name
            </LabelName>
            <Input type="text" value={filter} onChange={onFiltre}></Input>
        </Label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFiltre: PropTypes.func.isRequired,
};