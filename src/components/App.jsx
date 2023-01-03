import { useState, useEffect  } from "react";
import { Wrapper, TitlePhonebook, TitleContacts } from "components/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/ContactList/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem("contacts")) ?? []});
  const [filter, setFilter] = useState("");

  const handleSubmit = data => { 
    const findedName = contacts.find(contact => { 
      if (contact.name.toLowerCase() === data.name.toLowerCase() && contact.number === data.number) {
        return contact.name;
      };
      return undefined;
    });

    if (findedName) {
      alert(`${findedName} is alredy in contacts.`);
      return;
    }

    setContacts(contacts => [data, ...contacts]);
  };

  const handlFiltre = event => {setFilter(event.target.value)};

  const getfiltredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));
  };

  const handleDelete = id => {
    setContacts(contacts  => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      return updatedContacts;
    });
  };
  
  useEffect(
    () => { 
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

  return (
    <Wrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm
        onSubmit={handleSubmit}
      />

      <TitleContacts>Contacts</TitleContacts>
      <Filter
        filter={filter}
        onFiltre={handlFiltre}
      />
      <ContactList
        contacts={getfiltredContacts()}
        onDelete={handleDelete}
      />
    </Wrapper>
  ); 
};