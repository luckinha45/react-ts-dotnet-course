import styles from "./Home.module.css";

export default function Home() {
  return <div>
    <h1 className={styles.title} >Seja bem-vindo <span>{localStorage.getItem("user")}</span>!</h1>
    
    <div className={styles.title}>
      <img src="/wellcum.jpg" width="800px" />
    </div>
  </div>
}