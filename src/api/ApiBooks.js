const BooksApi = {
  books: [
    {
      index: 1,
      title: 'Ludoviko t.',
      edition: '22/08/1829' ,
      authors: [
        {
          index: 1,
          name: 'Luk'
        },
        {
          index: 2,
          name: 'Gorge'
        }
      ]
    },
    {
      index: 2,
      title: 'Goerge P.',
      edition: '12/01/1999',
      authors: [
        {
          index: 1,
          name: 'Marlon'
        },
        {
          index: 2,
          name: 'Gorge One'
        },
        {
          index: 3,
          name: 'Gorge Two'
        }
      ]
    },
    {
      index: 3,
      title: 'Morga P.',
      edition: '02/12/1489',
      authors: [
        {
          index: 1,
          name: 'Jhon Snow'
        },
        {
          index: 2,
          name: 'Diablillo'
        },
        {
          index: 3,
          name: 'Poul'
        }
      ]
    }
  ],
  all: function() {
    return this.books
  },
  get: function(index) {
    const isBook = p => p.index === index
    return this.players.find(isBook);
  }
}

export default BooksApi