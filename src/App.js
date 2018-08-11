import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import {Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
   books:[] 
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
      this.setState({ books })
  }

  moveShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf);
    book.shelf = shelf;    
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat(book),
    }));
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path = '/' render = {()=>(
          <MainPage
          books = {this.state.books}
          moveShelf = {this.moveShelf}
        />  
        )}/>
        <Route path= '/search' render = {({history}) => (
          <SearchPage 
            moveShelf = {this.moveShelf}
            books = {this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
