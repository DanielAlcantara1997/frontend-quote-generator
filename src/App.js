import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [quote, setQuote] = useState({from: "", text: "Generate Quote"})
  const [btnText, setBtnText] = useState("Generate Quote")

  const generateQuote = async () => {
    try {
      setBtnText("Wait")
      const response = await fetch(`https://quote-api-t039.onrender.com/api/randomize`)
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json()
      setBtnText("Generate Quote")
      setQuote(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: '18rem' }} className='text-center'>
          <Card.Body>
            <Card.Title>{quote.from}</Card.Title>
            <Card.Text>
              {quote.text}
            </Card.Text>
            <Button variant="primary" onClick={() => generateQuote()}>{btnText}</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
