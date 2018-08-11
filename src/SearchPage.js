import React ,{Component}from 'react'
import {Link} from 'react-router-dom'
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI'
import Book from './Book';


class SearchPage extends Component {

    state = {
        query:'',
        searchedBooks : []
	}

	updateQuery = (query)=> {
        this.setState({query:query})
        this.updateSearchedBooks(query);
    }
    
    updateSearchedBooks = (query) => { 
        if (query){
            BooksAPI.search(query).then((searchedBooks)=>{
                if(searchedBooks.error){
                    this.setState({searchedBooks: [] });
                }else{
                    this.setState({searchedBooks:searchedBooks})
                }
            }) 
        }else{
            this.setState({searchedBooks: [] });
        }           
    }

    render (){

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to = '/'>Close</Link>
                    <div className="search-books-input-wrapper">
                    <Debounce time="300" handler="onChange">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange = {(event) =>this.updateQuery(event.target.value) }
                        />
                    </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {   
                            this.state.searchedBooks.map(searchedBook=>{
                                let shelf = 'none';

                                this.props.books.map(book=>(
                                    book.id === searchedBook.id ? 
                                    shelf = book.shelf : ' '

                                ));

                                return(
                                    <li key={searchedBook.id}>
                                        <Book
                                            book = {searchedBook}
                                            moveShelf = {this.props.moveShelf}
                                            currentShelf = {shelf}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
          </div>
        );
    }
}

export default SearchPage;