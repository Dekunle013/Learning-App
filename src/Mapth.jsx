import { useState } from 'react'
// import LazyLoad from 'react-lazyload';
import './Styles.css'

const Mapth = () => {
  const [data, setData] = useState([
    {letter: 'A', word: 'Apple', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbWk00Vx0f23hq7NeHGH0s4iyi2uPrdMT-w&s'},
    {letter: 'B', word: 'Ball', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8XM76CpWFdVR2nPT2tmUqb-LRjlyQnE3JA&s'},
    {letter: 'C', word: 'Car', image:'https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg'},
    {letter: 'D', word: 'Dog', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxlDun0EWp8OiGTXoelcBkuM7BiifKAflkw&s'},
    {letter: 'E', word: 'Egg', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-NbxCMyhfrfoXVbP-t3vbXI4U0sPwOgGtw&s'},
    {letter: 'F', word: 'Fish', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalyiyaCscom37UYeQeC0NZJT7IiH1qABJlQ&s'},
    {letter: 'G', word: 'Giraffe', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg'},
    {letter: 'H', word: 'House', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0y78kq1YMuQ_QBV6Eo_osE4CeGnN1Z_6Aag&s'},
    {letter: 'I', word: 'Icecream', image: 'https://t3.ftcdn.net/jpg/05/64/02/34/360_F_564023464_RaZb95D8yFPt2DnxbsYLQaQQ5BSrUImO.jpg'},
    {letter: 'J', word: 'Jelly', image: 'https://t4.ftcdn.net/jpg/01/18/42/79/360_F_118427998_5Lgdv3WJdDRZBw5fSxihutyszl6IFPfB.jpg'},
    {letter: 'K', word: 'Kite', image: 'https://t3.ftcdn.net/jpg/01/06/47/06/360_F_106470653_KsMtuNb0BSBojPhRM19ycjzOPQGn7FOH.jpg'},
    {letter: 'L', word: 'Lion', image: 'https://img.freepik.com/free-photo/view-wild-lion-nature_23-2150460851.jpg'},
    {letter: 'M', word: 'Mango', image: 'https://t4.ftcdn.net/jpg/05/41/05/85/360_F_541058586_BI3eaJvZO132lNExAwbARYSg7FfHknWz.jpg'},
    {letter: 'N', word: 'Nurse', image: 'https://i.pinimg.com/736x/f0/fc/ae/f0fcaef66eda641e7045d8418cc38eb7.jpg'},
    {letter: 'O', word: 'Orange', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsL3lmoiuXvU42utqh7AHmkX98z0k-UVXNvw&s'},
    {letter: 'P', word: 'Pencil', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yETrDoNagbkvO0p8t_QcF6PD1X1NMUH9xQ&s'},
    {letter: 'Q', word: 'Queen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2SVtO9ftyLYU9PBqYFfWPYtAgIpTpyFDtA&s'},
    {letter: 'R', word: 'Rabbit', image: 'https://t3.ftcdn.net/jpg/02/47/33/08/360_F_247330858_RvSJWAhMbfrqsM5VUmjLD4gzzSKUaJls.jpg'},
    {letter: 'S', word: 'Spoon', image: 'https://t3.ftcdn.net/jpg/02/75/16/00/360_F_275160059_SkK5HApn4AduORNqJeZnhiN7AuMDGHeZ.jpg'},
    {letter: 'T', word: 'Table', image: 'https://img.freepik.com/premium-vector/real-wood-table-white-background_37787-91.jpg'},
    {letter: 'U', word: 'Umbrella', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXTvG1ZSKmhRtLcrD-yJBJOh449k6c8aEgg&s'},
    {letter: 'V', word: 'Vase', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1obeY3wU4m0uHEjNxkWvL0knC8urXn_CREw&s'},
    {letter: 'W', word: 'Watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ThfwYcSZyO_PoedZo0I_j-irH0WF5oLPAw&s'},
    {letter: 'X', word: 'Xylophone', image: 'https://t4.ftcdn.net/jpg/01/26/06/53/360_F_126065340_Xk7Mm7GlAsjXODo3GNx5YKDTHluXAp4Y.jpg'},
    {letter: 'Y', word: 'Yacht', image: 'https://img.freepik.com/premium-photo/luxury-motor-yacht-sea-expensive-rich-boat-sailing-ocean-generative-ai_788189-7476.jpg'},
    {letter: 'Z', word: 'Zebra', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95iDpXkACdoqVkcDHX4OvXRWHMmvjvsSOkA&s'}
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
