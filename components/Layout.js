import Nav from "./Nav"
import Meta from "./Meta"
import Header2 from "./Header2"
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header2 />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
