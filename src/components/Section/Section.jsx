import s from './Section.module.css';

export default function Section({ children }) {
  return (
    <section className={s.section}>
      {/* <img src="../../icons/tryzub5.svg" alt=""></img> */}
      {/* {title && <h1 className={s.title}>{title}</h1>} */}
      {children}
    </section>
  );
}
