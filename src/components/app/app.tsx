import styles from './app.module.css';
import { Paragraph } from '../index';

const App = () => (
    <div className={styles.app}>
        Hello World!
        <Paragraph color="red" text="Создайте аккаунт, чтобы выкладывать работы и общаться в сообществе единомышленников" />
    </div>
);

export default App;
