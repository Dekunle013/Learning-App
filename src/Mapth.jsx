import { useState } from 'react'
import './Styles.css'

const Mapth = () => {
  const [data, setData] = useState([
    {letter: 'A', word: 'Apple', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbWk00Vx0f23hq7NeHGH0s4iyi2uPrdMT-w&s'},
    {letter: 'B', word: 'Ball', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8XM76CpWFdVR2nPT2tmUqb-LRjlyQnE3JA&s'},
    {letter: 'C', word: 'Car', image:'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'},
    {letter: 'D', word: 'Dog', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxlDun0EWp8OiGTXoelcBkuM7BiifKAflkw&s'},
    {letter: 'E', word: 'Egg', image:'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?cs=srgb&dl=pexels-pixabay-162712.jpg&fm=jpg'}
  ])

  return (
    <div id="parent">
      {
        data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.word} />
            <p>{item.letter}</p>
            <p>{item.word}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Mapth;
