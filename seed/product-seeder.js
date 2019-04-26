var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );

var products = [
    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
}),
new Product({
    imagePath:'https://m.media-amazon.com/images/M/MV5BOWMwMTI3ZjMtODNhYi00MGY2LThkZmEtZWM5YTJmYmE5ODlkXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_UY98_CR3,0,67,98_AL_.jpg/',
    title: 'Dark Souls 3 Video Game',
    description: 'I died',
    price: 50
}),
new Product({
    imagePath:'https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s180-rw',
    title: 'Minecraft Video Game',
    description: 'Now that is super awesome',
    price: 20
}),
new Product({
    imagePath:'https://cdns.kinguin.net/media/catalog/category/cache/1/image/173x120/17f82f742ffe127f42dca9de82fb58b1/call-of-duty-modern-warfare_1.jpg',
    title: 'Call of Duty Video Game',
    description: 'Meh...nah, it\'s okay I guess',
    price: 40
})
];

var done = 0;

for (var i = 0; i < products.length; i++) {
        products[i].save( function( err, result) {
            done++;
            if( done === products.length){
                exit();
            }
        });
}

function exit(){
    mongoose.disconnect();
}
