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
    {
      path: '/test1/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test1</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      path: '/test2/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test2</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      path: '/test3/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test3</p>
            </div>
          </div>
        </div>
      `,
    },

    {
      path: '/test4/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test4</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      path: '/test5/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test5</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      path: '/test6/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="block">
              <p>Test6</p>
            </div>
          </div>
        </div>
      `,
    },



  ],
});
var mainView = app.views.create('.view-main')

$(document).on('page:init',function(e) {

$("#test").on("click", function() {
  var indoor = ["/test1/", "/test2/", "/test3/"]
  var indexnum = Math.floor((Math.random()  * indoor.length));
  console.log(indoor[indexnum]);
  var link = document.getElementById('test')
  link.setAttribute("href", indoor[indexnum])
  // $("#plant-quote").text(indoor[indexnum]);
})

$("#test2").on("click", function() {
  var outdoor = ["/test4/", "/test5/", "/test6/"]
  var indexnum = Math.floor((Math.random()  * outdoor.length));
  console.log(outdoor[indexnum]);
  var link = document.getElementById('test2')
  link.setAttribute("href", outdoor[indexnum])
  // $("#plant-quote").text(indoor[indexnum]);
})


})