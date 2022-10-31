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
      path: '/outdoor1/',
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
              <h1 class = "textalign"> Go for a run !</h1>
              <img src="img/run.gif" alt="run" height = "300" width = "300">
              <p>The following helps strengthen lungs and <br> bronchi.</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },
    {
      path: '/outdoor2/',
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
              <h1 class = "textalign"> Go for a hike !</h1>
              <img src="img/hike.jpeg" alt="hike" height = "300" width = "300">
              <p>The following would help in building stronger <br> muscles and bones. Also improve your sense<br> of balance</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },
    {
      path: '/outdoor3/',
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
              <h1 class = "textalign"> Go for a bike ride </h1>
              <img src="img/biking.jpg" alt="lunges" height = "300" width = "300">
              <p>The following would improve your overall lower<br> body function and tone your lower body. </p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },

    {
      path: '/outdoor4/',
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
              <h1 class = "textalign"> Go kick a soccer ball </h1>
              <img src="img/soccer.jpeg" alt="soccer ball" height = "300" width = "300">
              <p>The following would increases aerobic<br> capacity and cardiovascular health.</p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },

    
    {
      path: '/outdoor5/',
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
              <h1 class = "textalign">Go kayaking</h1>
              <img src="img/kayaking.jpg" alt="kayaking" height = "300" width = "300">
              <p>The following would improved cardiovascular<br> fitness and strengthen upper body. </p>
              <div class = "shift"> 
              <a class= "button button-round button-fill">More Information</a></div>
            </div>
          </div>    
        </div>
      </div>
      `,
    },



  ],
});
var mainView = app.views.create('.view-main')

$(document).on('page:init',function(e) {

  /*
function mixed() {
  var mixed = ["/indoor1/", "/indoor2/", "/indoor3/", "/indoor4/", "/indoor5/", 
                "/outdoor1/", "/outdoor2/", "/outdoor3/", "/outdoor4/", "/outdoor5/"]
  var indexnum = Math.floor((Math.random()  * mixed.length));
  console.log(mixed[indexnum]);
  var link = document.getElementById('test3')
  link.setAttribute("href", mixed[indexnum])
}
*/
//mixed();

function pickpage() {
  var indoor = ["/indoor1/", "/indoor2/", "/indoor3/", "/indoor4/", "/indoor5/"]
  var indexnum = Math.floor((Math.random()  * indoor.length));
  console.log(indoor[indexnum]);
  var link1 = document.getElementById('test')
  link1.setAttribute("href", indoor[indexnum])
}

pickpage();

function pickpage2() {
  var outdoor = ["/outdoor1/", "/outdoor2/", "/outdoor3/", "/outdoor4/", "/outdoor5/"]
  var indexnum = Math.floor((Math.random()  * outdoor.length));
  console.log(outdoor[indexnum]);
  var link2 = document.getElementById('test2')
  link2.setAttribute("href", outdoor[indexnum])
}
pickpage2();

function pickpage3(){
  var mixed = ["/indoor1/", "/indoor2/", "/indoor3/", "/indoor4/", "/indoor5/", 
  "/outdoor1/", "/outdoor2/", "/outdoor3/", "/outdoor4/", "/outdoor5/"]
  var indexnum = Math.floor((Math.random()  * mixed.length));
  console.log(mixed[indexnum]);
  var link3 = document.getElementById('redeem')
  console.log(link3)
  link3.setAttribute("href", mixed[indexnum])
}
pickpage3();
})


