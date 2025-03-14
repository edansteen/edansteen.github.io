import styles from "../styles/Projects.module.css";

export default function Layout({ children }) {
    return <div className={styles.post}>{children}</div>;
}