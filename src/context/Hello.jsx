import { useContext } from "react";
import { LanguageContext } from "./Languagecontext";

function Hello() {
  const language = useContext(LanguageContext);

  return (
    <h2>{language === "EN" ? "Hello world" : "Ciao mondo"}</h2>
  );
}

export default Hello;
