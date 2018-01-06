import React, { Component } from 'react'

class Book extends Component {
    state = {
        shelf: 'none'
    }
    handleChange = (val) => {
        this.setState({
            shelf: val
        })
        this.props.updateShelf(this.props.book, val)
    }
    render() {
        const book = this.props.book
        let shelf = this.state.shelf
        if (book.shelf) {
            console.log(book.shelf)
            shelf = book.shelf
        }
        let url = '' 
        if (book.imageLinks.smallThumbnail) {
            url = book.imageLinks.smallThumbnail
        } else if (book.imageLinks.thumbnail) {
            url = book.imageLinks.thumbnail
        }
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event) => this.handleChange(event.target.value)} >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && (
                    <div className="book-authors">{book.authors[0]}</div>
                )}
            </div>
        )
    }
}

export default Book