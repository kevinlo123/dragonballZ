document.addEventListener("DOMContentLoaded", () => {
  
  let images = ["https://myanimelist.cdn-dena.com/s/common/uploaded_files/1441935846-a593ae97efb11e539d7df094c31207f6.png","http://orig09.deviantart.net/3090/f/2012/209/b/2/ssj_goku_buu_saga_by_boscha196-d58ypre.png" , "https://s-media-cache-ak0.pinimg.com/originals/28/29/bf/2829bfb2ab313d846615fa475dde9b22.png" , "https://vignette2.wikia.nocookie.net/dbz-dokkanbattle/images/6/6d/IMG_0069.PNG/revision/latest?cb=20170219012616" ,"https://img00.deviantart.net/2a67/i/2016/267/5/3/goku_super_saiyan_god_by_frost_z-daipjm1.png" , "https://s-media-cache-ak0.pinimg.com/originals/d7/48/b6/d748b6c12718c537dc2890ef1d09247e.png"];


  const leftDragonBall = document.querySelector("#dragonLeft");
  const rightDragonBall = document.querySelector("#dragonRight");

  let count = 0;

  rightDragonBall.addEventListener("click", () => {
    console.log("working");
    if(count === images.length - 1){
      count = 0;
    }else{
      count += 1;
    }
    document.querySelector("#galleryPhotos").src = images[count];
  });

  leftDragonBall.addEventListener("click" , () => {
    console.log("working");
    if(count === 0){
      count  = images.length - 1;
    }else{
      count -= 1;
    }
    document.querySelector("#galleryPhotos").src = images[count];
  });
});