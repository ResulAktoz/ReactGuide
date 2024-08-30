import { useEffect } from "react";
import logo from "./logo.svg"
import Test from "./Test"
import styles from "./App.module.css"
import{Title} from "./components"
import Bootstrap from "./Bootstrap"
import Tailwind from "./Tailwind"
import './tailwind.css'

function App() {

/*useEffect (() => {
  console.log(styles)
})*/

useEffect(() => {
  if(process.env.NODE_ENV == 'production'){
    }
}, [])

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme = 'dark'>{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test />
      {process.env.NODE_ENV === 'production' && (
        <>
        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
        </>
      )}
      <Bootstrap />
      </div>
  );
}

export default App;
