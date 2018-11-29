import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(res => res.json())
      .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
      });
  }

  render() {

    var {items} = this.state;

        return (
          
          <div className="App">
            <h1 className="header">Book App</h1>
             <ul className="books-container">
                {items.map(item => (
                    <li key={item.id}>
                     <div>Author: {item.author} </div>
                     <div>Title: {item.title}</div>
                     <div>Country: {item.country} </div>
                     <div>Language: {item.language}</div>
                     <div>Pages: {item.pages}</div>
                     <div>Year: {item.year}</div>
                     <p></p>
                     <p></p>
                    </li>
                ))};
             </ul>
         </div>
        )
       }   
    }

    

export default App;
