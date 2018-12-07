import React from 'react';
import DatePickerBook from '../../datepicker/DatePickerBook';
import ApiBooks from '../../../api/ApiBooks';
import * as moment from 'moment';
import * as _ from 'lodash';
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksFiltered: [],
      books: [],
      edition: '',
      title: '',
      authors: ''
    }
  }

  handleChangeTitle(event) {
    let title = this.state.title;
    title = event.target.value;
    this.setState({title: title});
  }

  handleChangeEdition(event) {
  }

  handleChangeAuthors(event){
    let authors = this.state.authors;
    authors = event.target.value;
    this.setState({authors});
  }

  findItem(event){
    let itemsFound = [];
    if (this.state.edition !== '') {
      itemsFound = _.uniqBy(_.filter(this.state.books, book => {
        let title = book.title;
        let query = this.state.title;
        query = query.toLowerCase();
        title = title.toLowerCase();
        return title.indexOf(query) !== -1;
      }), 'title');
    } else if (this.state.title !== '') {
      itemsFound = _.uniqBy(_.filter(this.state.books, book => {
        let edition = book.edition;
        let query = this.state.edition;
        query = query.toLowerCase();
        edition = edition.toLowerCase();
        return edition.indexOf(query) !== -1;
      }), 'edition');
    } else if (this.state.authors !== '') {
      _.forEach(this.books, book => {
        let authors  = _.uniqBy(_.filter(this.state.books, book => {
          let name = book.name;
          let query = this.state.authors;
          query = query.toLowerCase();
          name = name.toLowerCase();
          return name.indexOf(query) !== -1;
        }), 'name');
        itemsFound.concat(authors);
      });
    }

    console.log(itemsFound);
  }

  getAllBooks() {
    const books = ApiBooks.all();
    const booksFiltered = books;
    console.log(books);
    this.setState({books});
    this.setState({booksFiltered})
    
  }

  componentDidMount() {
    this.getAllBooks();
  }

  onChangeDate(date){
    console.log('date: ',  date)
    let dateFormat = moment(date).format('MM/DD/YYYY');
    this.setState({edition: dateFormat});
  }

  render() {
     return (
      <div className ="container">
        <div className="row">
          <div className="col">
            <div>
              <div className="form-group row">
                <label htmlFor="inputTitulo" className="col-sm-2 col-form-label">Titulo</label>
                <div className="col-sm-10">
                  <input
                    type="titulo"
                    className="form-control"
                    id="inputTitulo"
                    placeholder="Titulo..."
                    value={this.state.title}
                    onChange={(e) => {this.handleChangeTitle(e)}}></input>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputEdicion" className="col-sm-2 col-form-label">Edicion</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEdicion"
                    placeholder="Edicion..."
                    value={this.state.edition}
                    onChange={(e) => {this.handleChangeEdition(e)}}></input>
                </div>
                <div className="col-sm-4">
                  <DatePickerBook onChangeDate={this.onChangeDate.bind(this)}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <div className="form-group row">
                <label htmlFor="inputAutores" className="col-sm-2 col-form-label">Autores</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAutores"
                    placeholder="Autores..."
                    value={this.state.authors}
                    onChange={(e) => {this.handleChangeAuthors(e)}}></input>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10"></div>
                <button
                  type="submit"
                  className="btn btn-primary col-sm-2"
                  onClick={this.findItem.bind(this)}>Buscar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Edicion</th>
                  <th scope="col">Autores</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.booksFiltered.map(book => (
                    <tr key={book.index}>
                      <td>{book.title}</td>
                      <td>{book.edition}</td>
                      <td>{book.authors.length}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
     )
  }
}

export default Books;