import { Outlet } from "react-router-dom";
import styles from "./style.module.css"

function App() {
  return (
    <div className={styles.contedorApp}>
      <Outlet/>
    </div>
  );
}

export default App;
    