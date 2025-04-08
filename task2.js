const book = {
    title: 'ijapatirokoo',
    description: 'a fairy  tale of differnt stories of animals',
    NumbersOfPage: 52,
    author: 'agunbiade E.O',
    reading: true,
    toggleReadingStatus: function (){
        this.reading = !this.reading;
        console.log ("the book " + this.title + ' is currently being read: ' + book.reading)
    }
}
book.toggleReadingStatus()