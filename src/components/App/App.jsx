import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { getContacts } from 'Redux/contacts/contactsOperation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <>
      <Section>
        <h1 className={s.title}>Телефонна книга</h1>
        <div className={s.container}>
          <ContactForm />
          <div>
            <h2 className={s.contacts}>Контакти ({contacts})</h2>
            <Filter />
            <ContactsList />
          </div>
        </div>
        <h2 className={s.text}>русский военный корабль, иди НАХ*Й</h2>
      </Section>
    </>
  );
};

export default App;
