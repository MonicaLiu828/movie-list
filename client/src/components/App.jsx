import React from 'react';
const {useState} = React;

const App = (props) => {
  const[entry, setEntry] = useState('');
  const[addEntry, setAddEntry] = useState('');
  const[allMovies, setAllMovies] = useState();
  const[displayMovies, setDisplayMovies] = useState([]);
  // const[isWatch, setIsWatched]= useState(false);
  const[allStatus, setAllStatus] = useState ({})

  var handleClick = function () {
    for (var i = 0; i <props.movies.length; i++) {
      if (entry === props.movies[i].title) {
        // console.log(props.movies[i])
        setDisplayMovies([props.movies[i]])
        return;
      }
    }
    setDisplayMovies([{title: 'no movie by that name found'}])
  };

  var handleAdd = function () {
    console.log(addEntry)
    var newAll = [...props.movies]
    newAll.push({title:addEntry});
    setAllMovies(newAll);
    setDisplayMovies([{title:addEntry}]);
  }

  var toggleStatus = function (movie) {
    var newAllStatus = JSON.parse(JSON.stringify(allStatus));
    //at start, all should be to watch and allstatus is empty;
    if (!(movie.title in newAllStatus)) {
      newAllStatus[movie.title] = 'Watched';
    } else if (movie.title in newAllStatus) {
      if (newAllStatus[movie.title] === 'Watched') {
        newAllStatus[movie.title] = 'To Watch';
      } else {
        newAllStatus[movie.title] = 'Watched';
      }
    }
    //when it is not in this newallstatus, put it into newalstatus and set title: 'watched'
    // when it is in this newallstatus, if it is watched, it should change to to watch;
    // when it is in this newallstatus, if it is to watch, it should change to watched;
    setAllStatus(newAllStatus);
  }

  var setUpStatus = function (movie) {
    console.log('this is', movie);
    if (allStatus[movie.title] === undefined) {
      allStatus[movie.title]= 'To Watch'
      return 'To Watch';
    } else {
      return allStatus[movie.title];
    }
  }

  var filter = function (isWatch) {
    var filterArr = []
    for (var i = 0; i < allMovies.length; i++) {
      if (allStatus[allMovies[i].title] === isWatch) {
        filterArr.push(allMovies[i]);
      }
    }
    setDisplayMovies(filterArr);
  }

  // console.log(props.movies)
  return (
    <div>
      <div>
        <input type='text' value={addEntry} onChange={(event) => {setAddEntry(event.target.value)}}>
        </input>
        <button onClick={handleAdd}> Add</button>
      </div>

      <div>
      <button onClick={() => {filter('Watched')}}> Watched</button>
      <button onClick= {() => {filter('To Watch')}}> To Watch</button>
      <input type='text' value={entry} onChange={(event)=> {setEntry(event.target.value)}}></input>
      <button onClick={handleClick}> Go </button>
      </div>

       {(displayMovies).map((movie) => (
        <div>
          {movie.title}
          <button onClick={() => {toggleStatus(movie)}}>{setUpStatus(movie)}</button>
        </div>
        ))}
    </div>
  )
};



export default App;