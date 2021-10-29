import s from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      {children}
    </div>
  );
}
