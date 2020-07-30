var app = new Vue({
  el: "#the_food_app",
  data: {
    title: "Vue app title",
    subtitle: "subtitle",
    favorites: 0,
    foods: [
      {
        name: "apple",
        description: "test",
        src:
          "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg",
        percent_carbs: 79,
        is_fav: true,
      },
      {
        name: "eggs",
        description: "test2",
        src: "https://i0.wp.com/ajp.com.au/wp-content/uploads/2019/11/Eggs.png",
        percent_carbs: 2,
        is_fav: true,
      },
      {
        name: "banana",
        description: "test3",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SL1500_.jpg",
        percent_carbs: 93,
        is_fav: false,
      },
    ],
  },
  components: {
    MyDemoLocalComponent
  },
  methods: {
    updateFavorite: function (name, value) {
        let f = _.find(this.foods, function(f) { return f.name === name });

        if(f) {
            f.is_fav = value;

            let fav = 0;
            this.foods.forEach(f => {
                if(f.is_fav) {
                    fav++;
                }
            });

            this.favorites = fav;
        }
    },
  },
});
