 const books =[
    {title: 'ijapatiroko',
        description: 'yoruba book',
        numbersOfPage: 52,
        author: 'dayo amusan', 
        reading: true

    },
    
    {title: 'ajanleikoko',
        description: 'yoruba story book',
        numbersOfPage: 50,
        author: 'alausa sule', 
        reading: false
    },

    {title: 'alamu onilu',
        description: 'yoruba fiction book',
        numbersOfPage: 49,
        author: 'alamu E.J', 
        reading: true
    },
    
 ];
 for (let i = 0; i< books.length; i++){
    if (books[i].reading === true){
        console.log (books[i]);
 }
}
