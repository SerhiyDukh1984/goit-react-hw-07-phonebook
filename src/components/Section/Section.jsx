import PropTypes from 'prop-types';
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

Section.propTypes = {
  // title: PropTypes.string.isRequired,
  // children: PropTypes.array.isRequired,
};
