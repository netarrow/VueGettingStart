var app = new Vue({
    el: '#the_food_app',
    data: {
        title: 'Vue app title',
        subtitle: 'subtitle',
        foods: [
            {name: 'apple', description: 'test', src: 'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg'},
            {name: 'eggs', description: 'test2', src: 'https://i0.wp.com/ajp.com.au/wp-content/uploads/2019/11/Eggs.png'},
            {name: 'banana', description: 'test3', src: 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SL1500_.jpg'}]
    }
});