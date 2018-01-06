import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
class ShelfCollection extends Component {
    
    render() {
        const {cur, want, alread} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">  
                    <div>  
                        <Shelf name="Currently Reading" books={cur} updateShelf={this.props.updateShelf}/>
                        <Shelf name="Want to Read" books={want} updateShelf={this.props.updateShelf}/>
                        <Shelf name="Read" books={alread} updateShelf={this.props.updateShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        className="add-book"
                        to="/search"
                    >Add a book</Link>
                </div>
               
            </div>
        )
    }
}

export default ShelfCollection