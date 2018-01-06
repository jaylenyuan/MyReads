import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends Component {
    render() {
        const books = this.props.books
        const name = this.props.name
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <Book book={book} updateShelf={this.props.updateShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf