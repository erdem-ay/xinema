import { useState } from "react";

const movies = [
  { id: 1, name: "Batman", price: 12, currency: "TL" },
  { id: 2, name: "Hulk", price: 14, currency: "TL" },
  { id: 3, name: "Spiderman", price: 16, currency: "TL" },
];

function MoviePicker() {
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleChange = (e) => {
    let _selectedMovie = movies.filter((movie) => e.target.value == movie.id);
    setSelectedMovie(_selectedMovie[0]);
  };
  return (
    <div >
      <h1>Xinema Booking</h1>
      <p>{selectedMovie.name}</p>
      <div className="flex j-between ">
        <p>Pick a move:</p>
        <div className="flex i-center mx-4">
          <select onChange={handleChange} name="" id="" defaultValue={""}>
          <option value="" disabled hidden>Select Movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name} {movie.price} {movie.currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default MoviePicker;
