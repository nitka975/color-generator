import React, {useState , useEffect} from "react";
import axios from 'axios';
import { response } from "express";

function App() {

    const [color, setColor] = useState('#fff');


    const [colorList, setColorList] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/colors', {color: randomColor })
        .then((response) => setColorList(------------------------))
        .catch((error) => console.error('Ошибка в загрузке цветов',error));
    }, []);

    const generateColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16999999).toString(16)}`;
      setColor(randomColor);
    };

  return (
    <div style={{...styles.container, backgroundColor: color}}>
      <h1>Color generator</h1>
      <p>This color: {color}</p>
      <button style={{backgroundColor:'#10c7de'}} onClick= {generateColor}>generator color</button>
      
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    transition: 'background-color 400ms ease', 
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
}



export default App;
