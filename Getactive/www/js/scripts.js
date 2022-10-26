var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/categories/',
      url: 'pages/categories.html',
    },

  ],
});
var mainView = app.views.create('.view-main')