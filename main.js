import mapActions from 'vuex'

const store = new Vuex.Store({ 
  state: {
    title: "Vue app title",
    subtitle: "subtitle",
    foods: [
      {
        name: "apple",
        description: "test",
        src:
          "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg",
        percent_carbs: 79,
        is_fav: false,
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
  getters: {
    state: state => {
      return state;
    }
  },
  mutations: {
    toggleFav: (state, data) => {
        let f = _.find(store.getters.state.foods, function(f) { return f.name === data.name });

        if(f) {
            f.is_fav = data.value;
        } 
    }
  },
  actions: {
    toggleFav: (context, data) => {
      setTimeout(function() {
        context.commit('toggleFav', data);
      }, 2000);
    }
  }
 });

var app = new Vue({
  el: "#the_food_app",
  computed: {
    data: function() {
      return store.getters.state;
    },
    favorites: function() {
      let fav = 0;
      store.getters.state.foods.forEach(f => {
        if(f.is_fav) {
            fav++;
        }
      });

      return fav;
  },
},
  components: {
    MyDemoLocalComponent
  },
  methods: {
    updateFavorite: function (name, value) {
     store.commit('toggleFav', {name, value})
     //store.dispatch('toggleFav', {name, value})
    },
  },
});

Vue.config.devtools = true
