import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { getContacts } from 'Redux/contacts/contactsOperation';

const App = () => {
  const dispatch = useDispatch();
  const isContacts = useSelector(state => Boolean(state.contacts.items.length));

  useEffect(() => {
    !isContacts && dispatch(getContacts());
  });

  return (
    <Section title="Phonebook">
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Section>
  );
};

export default App;
