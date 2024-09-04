import { createElement, Fragment } from "react";

//import "./style.scss";
import "./tailwind.css";
import Button from "./components/Button"

/*function Button(props) {
  return <button>{props.text}</button>;
}*/

function App() {
  const todos = ["todo1", "todo2", "todo3"];
  //const style = { color: "red", backgroundColor: "yellow" }; //diyip direkt h1 stlye icinde {style} olarak cagirabiliriz.
  /*const h1 = createElement("h1", null, "ResulAktoz");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => ("li", null, todo))
  );

     return createElement(
       "main",
       {
         className: "test",
         id: "main",
       },
       h1,ul //"main content" //children
    jsx olmadan yapilis.
     );*/

  /*const searchFunction = () => {
    alert("maraba");
  };// onClick icinde cagri yapilir */

  /*
  {todos.map((todo, index) => (
          <li>{todo}</li>
        ))} Bu yapida bir html etiketi döneceğini anlar

        {todos.map(() => ({
            obje olarak donecegini bilir.
}))}

          {todos.map(() => {
            
            return ''
            })} return ister.

  */

  return (
    
    <main id="main" className="test">
      <Button text = "Selamlar" />
      <Button text = "Selamlar" variant="success" />
      <Button text = "Selamlar" variant="danger" />
      <Button text = "Selamlar" variant="warning" />
      <h1 tabIndex="3" style={{ color: "red", backgroundColor: "yellow" }}>
        ResulAktoz
      </h1>
      <label htmlFor="arama" tabIndex={2} onClick={() => alert("meraba")}>
        Arama
      </label>
      <input type="text" id="arama" tabIndex={1}></input>

      <ul>
        {todos.map((todo, index) => (
          <li>{todo}</li>
        ))}
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>

      <Button text="Merhaba" />
    </main>
  );
}
//main yerine <> </> Fragment olarak kullanilabilir.
export default App;
