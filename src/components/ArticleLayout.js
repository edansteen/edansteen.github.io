import styles from "../styles/Main.module.css";

export default function Layout({ children }) {
    return <div className={styles.post}>{children}</div>;
}