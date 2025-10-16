// pages/404.js
import styles from "../styles/Error.module.css";
import { useRouter} from 'next/router';

export default function Custom404() {
    const router = useRouter();
    return (<>
      <main>
        <div className={styles.error}>
          <h1 className={styles.gradientText}>404 - Page Not Found</h1>
          <button onClick={() => router.push('/')}>← Return to Home</button>
        </div>
      </main>
    </>
    );
}