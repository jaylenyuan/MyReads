import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

import './App.css'
import Search from './Search';
import ShelfCollection from './ShelfCollection';

class BooksApp extends React.Component {
  state = {
    currentlyreading: [],
    wanttoread: [],
    alreadyread: [],
    searchResult:[],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyreading: books.filter(book => book.shelf === "currentlyReading"),
        wanttoread: books.filter(book => book.shelf === "wantToRead"),
        alreadyread: books.filter(book => book.shelf === "read"),
        searchResult:[]
      })
    })  
    
  }
  updateShelf = (book, shelf) =>{
    BooksAPI.update(book, shelf).then(() => {BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyreading: books.filter(book => book.shelf === "currentlyReading"),
        wanttoread: books.filter(book => book.shelf === "wantToRead"),
        alreadyread: books.filter(book => book.shelf === "read"),
      })
    })})
    
  }
  searchBooks = (name) => {
    BooksAPI.search(name).then(books => {
      this.setState({
        searchResult: books
      })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search 
            cur={this.state.currentlyreading}
            want={this.state.wanttoread}
            alread={this.state.alreadyread}
            searchResult={this.state.searchResult}
            searchBooks={this.searchBooks}
            updateShelf={this.updateShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <ShelfCollection 
          cur={this.state.currentlyreading}
          want={this.state.wanttoread}
          alread={this.state.alreadyread}
          updateShelf={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
