// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//page 19-20

// import * as React from 'react';

// const title = 'React';

// function App() {
//   return (
//     <div>
//       <h1>Hello {title}</h1>
      
//       <label htmlFor='search'>Search:</label>
//       <input id="search" type='text'/>
//     </div>
//   );
// }

// export default App;


// page 20

// import * as React from 'react';

// const welcome = {
//   greeting: 'Hey',
//   title: 'React',
// };

// function App() {
//   return (
//     <div>
//       <h1>
//         {welcome.greeting} {welcome.title}
//       </h1>

//       <label htmlFor='search'>Search:</label>
//       <input id="search" type="text"></input>
//     </div>
//   );
// }

// export default App;

//page-21

// import * as React from 'react';

// function getTitle(title) {
//   return title;
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello {getTitle('react')}</h1>
//       <label htmlFor='search'>Search:</label>
//       <input id="search" type="text"></input>
//     </div>
//   );
// }

// export default App;


//Page-22-23

import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https: //reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https: //redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
      
      <hr />
      
      <ul>
        {list.map(function (item) {
          return <li>{item.title}</li>;
        })}
      </ul>

      {/* page -25 */}
      <ul>
        {list.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>

      {/* page-25 */}
      
      <ul>
        {list.map(function (item, number) {
          return (
            <li key={number}>

            </li>
          );
        })}
      </ul>

      {/* Page-26 */}

      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(newNumbers);

export default App;