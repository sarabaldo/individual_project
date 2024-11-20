// INDIVIDUAL PROJECT - SI 339 
// Putting the Vanilla Tilt Effect in another javascript because it created problems for the other lines of code for the other html files

VanillaTilt.init(document.querySelector("#container_index"), {
    max:15, 
    speed:400
  })
  
  VanillaTilt.init(document.querySelectorAll("#container_index"));