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
      path: '/indoor1/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="adjust">
              <h1 class = "textalign"> Lift up a desk !</h1>
              <img src="img/desk.jpg" alt="lift desk" height = "300" width = "300">
              <p>The following would help to build muscle and <br> improve strength throughout the upper <br> and lower body.</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },
    {
      path: '/indoor2/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="adjust">
              <h1 class = "textalign"> Do 50 Pushs Up </h1>
              <img src="img/pushup.jpg" alt="push ups" height = "300" width = "300">
              <p>The following would help to build muscle and <br> improve strength throughout the upper body</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },
    {
      path: '/indoor3/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="adjust">
              <h1 class = "textalign"> Go do lunges !</h1>
              <img src="img/lunges.jpeg" alt="lunges" height = "300" width = "300">
              <p>The following would help increase muscle mass <br> and tone your lower body focusing on your <br> glutes, legs and core. </p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },

    {
      path: '/indoor4/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="adjust">
              <h1 class = "textalign"> Do a 2 min wall squat!</h1>
              <img src="img/wallsquat.jpg" alt="wall squat" height = "300" width = "300">
              <p>The following would help strenghten your legs <br> and tone your lower body focusing on your <br> glutes and legs. </p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },

    
    {
      path: '/indoor5/',
      content: `
        <div class="page">
        <div class="toolbar tabbar toolbar-bottom no-shadow">
          <div class="toolbar-inner">
            <a href="/#/" class="link" id="home"><i class="icon material-icons">home</i></a>
            <a href="/categories/" class="link" id="category"><i class="icon material-icons">category</i></a>
          </div>
        </div>
          <div class="page-content">
            <div class="adjust">
              <h1 class = "textalign"> Do 50 jumping jacks</h1>
              <img src="img/jumping.jpg" alt="jumping jacks" height = "300" width = "300">
              <p>The following would increase your heart rate <br> and endurance as well as burn some calories</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
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
  var indoor = ["/indoor1/", "/indoor2/", "/indoor3/", "/indoor4/", "/indoor5/"]
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