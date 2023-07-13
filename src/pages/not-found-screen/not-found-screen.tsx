import { Helmet } from 'react-helmet-async';
import styles from './not-found-screen.module.css';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className={styles.notFoundScreen}>
      <section className={styles.customsection}>
        <Helmet>
          <title>Страница не найдена</title>
        </Helmet>
        <section>
          <Link className="game__back" to="/">
            <img className={styles.applogo} src="https://sasha1985y.github.io/my-first-site/img/logo.svg" alt="лого" />
          </Link>
          <h1 style={{color: 'crimson'}}>404. Page not found</h1>
          <Link style={{color: 'crimson'}} to="/">Вернуться на главную</Link>
        </section>
      </section>
    </div>
  );
}

export default NotFoundScreen;
