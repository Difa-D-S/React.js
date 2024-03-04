import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import Card from 'react-bootstrap/Card';
import bird from './assets/download.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './component/ExampleCarouselImage';


const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
  });
  const [arr, setArr] = useState([]);

  return (
    <>
    <div className='list'>
    <div className='flex'>
    <input className="todo-input" type="text" placeholder="Enter your todo" value = {todo.title}
      onChange = {(e) => setTodo({id: Math.random(), title: e.target.value})}></input>

    <Button variant="danger" onClick={() => setArr([...arr, todo])}> Add todo </Button>
    </div>
                {/* <button 
                  onClick = {() => {
                    console.log(arr);
                    }}
                    > array </button> */}

    <div>
      {arr.map((item) => (
      <p className='list-value' key={item.id}>{item.title}</p>
    ))}
    </div>
    </div>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bird} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



{/* State and Use State */}

        
    
    </>
  );
}

export default App;
