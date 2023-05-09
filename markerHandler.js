AFRAME.registerComponent("markerhandler",{
    init: async function(){
this.el.addEventListener("makerFound",()=>{
this.handleMarkerFound()
})

this.el.addEventListener("makerLost",()=>{
    this.handleMarkerLost()
 
})

    },


    handleMarkerFound:function(){
// changing button div visibility
var buttonDiv=document.getElementById("button-div")
buttonDiv.style.display="flex"


var ratingButton=document.getElementById("rating-button")
var ordergButton=document.getElementById("order-button")

// handling click events
ratingButton.addEventListener("click",function(){
    swal({
icon:"warning",
title:"Order Summary",
text:"work in progress"
    })
})

orderButton.addEventListener("click",function(){
    swal({
icon:"https://i.imgur.com/4NZ6uLY.jpg",
title:"Thanks for Order!!",
text:"Your order will be served soon on your table!!"
    })
})



    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"

    },


})