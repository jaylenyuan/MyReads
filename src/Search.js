import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
class Search extends Component {
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({
            query
        })
        if (query) {
            this.props.searchBooks(query)     
        }
    }
    clearQuery = () => {
        this.setState({
            query: ''
        })
    }
    render() {
        const query = this.state.query
        let books = []
        if (query) {
            books = this.props.searchResult
            for (let i = 0; i < books.length; i++) {
                let tmp = this.props.cur.filter(book => book.id === books[i].id)
                if (tmp.length > 0) {
                    books[i] = tmp[0]
                    continue
                }
                tmp = this.props.want.filter(book => book.id === books[i].id)
                if (tmp.length > 0) {
                    books[i] = tmp[0]
                    continue
                }
                tmp = this.props.alread.filter(book => book.id === books[i].id)
                if (tmp.length > 0) {
                    books[i] = tmp[0]
                }
            }
        }
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" onClick={this.clearQuery}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author" 
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                {books.length > 0 && (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {books.map(book => (
                                <li key={book.id}>
                                    <Book book={book} updateShelf={this.props.updateShelf}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
                
           </div> 
        )
    }
}
export default Search