export default function() {
  this.get('/books', function() {
    return {
      data: [{
        type: 'books',
        id: 1,
        attributes: {
          title: 'Inferno',
          author: 'Dan Brown',
          year: '2013 ',
          image: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Inferno-cover.jpg',
          blurb: 'Inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons, The Da Vinci Code and The Lost Symbol. The book was released on May 14, 2013 by Doubleday.[1] It was number one on the New York Times Best Seller list for hardcover fiction and Combined Print & E-book fiction for the first eleven weeks of its release, and also remained on the list of E-book fiction for the first seventeen weeks of its release. A film adaptation was released in the United States on October 28, 2016.'
        }
      }]
    };
  });
}
