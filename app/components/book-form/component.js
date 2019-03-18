import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BookForm extends Component {
  @service store

  @tracked title
  @tracked isbn
  @tracked publishDate
  @tracked author

  constructor() {
    super(...arguments);
    this.title = this.args.book.title
    this.isbn = this.args.book.isbn
    this.publishDate = this.args.book.publishDate
    this.author = this.args.book.author
  }

  @action
  changeAuthor(id) {
    let author = this.args.authors.find(a => a.id == id);

    this.author = author;
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query }});
  }

  @action
  submitChanges() {
    this.args.onsubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author,
    });
  }
};
