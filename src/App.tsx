import React, {useState} from "react";
import axios from "axios";
import PhraseEngRus from "./component/phrase.eng.rus";
import Header from "./component/header";
import Footer from "./component/footer";
import { EngRusForm } from "./entity/eng.rus.form";
import Lesson1 from "./component/lesson1";

function App() {
    

  return (
    <div>
        <Header/>
        <Lesson1/>
        <Footer/>
    </div>
  );
}

export default App;
