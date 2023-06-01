import { NextPage } from "next";
import styles from "./page.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./HeaderComponent/HeaderComponent"


const Home: NextPage = () => {
  return (
      <main className={styles.main}>
        <HeaderComponent></HeaderComponent>
      </main>
  )
}

export default Home