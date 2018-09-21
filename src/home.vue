<template>
  <div>
    <div class="container" style="width:100%">
      <div class="text-block">
        <h4>Fashion</h4>
        <p>Shop The Collection</p>
      </div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <img src="images/t1.jpg" alt="Los Angeles" style="width:300px;margin:auto;">

          </div>

          <div class="item">
            <img src="images/s1.jpg" alt="Chicago" style="width:300px;margin:auto;">
          </div>

          <div class="item">
            <img src="images/j1.jpg" alt="New york" style="width:300px;margin:auto;">
          </div>
          <div class="item">
            <img src="images/k1.jpg" alt="New york" style="width:300px;margin:auto;">
          </div>
        </div>



        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div>

      <div class="row">
        <div class="col-lg-4 classpading box">
          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/t1.jpg" class="img-responsive img-circle"></router-link>


        </div>
        <div class="col-lg-4 classpading">
          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/j5.jpg" class="img-responsive img-circle"></router-link>
        </div>
        <div class="col-lg-4 classpading">
          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/t3.jpg" class="img-responsive img-circle"></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 classpading">
          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/k1.jpg" class="img-responsive img-circle"></router-link>
        </div>
        <div class="col-lg-4 classpading">

          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/s5.jpg" class="img-responsive img-circle"></router-link>
        </div>
        <div class="col-lg-4 classpading">

          <router-link :to="{name:'page1',query:{page:1}}"><img src="images/k4.jpg" class="img-responsive img-circle"></router-link>
        </div>
      </div>
    </div>

  </div>

</template>
<style>
.classpading {
  margin-top: 55px;
}

.img-responsive {
  width: 300px;
  height: 300px;
  margin: auto;
}

.container {
  margin-top: 10px;
  position: relative;
}

.text-block {
  position: absolute;
  bottom: 20px;
  right: 50px;
  background-color: whitesmoke;
  color: gray;
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: 2px 1px brown;
  font-style: italic;
  font-weight: bold;
}

img:hover {
  opacity: 0.7;
  filter: alpha(opacity=50);
}
</style>