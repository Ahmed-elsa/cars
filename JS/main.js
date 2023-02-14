


// select landing page
let landing = document.querySelector(".landing-page")

let imgsArray =["carpixelnet_2021_hyundai_elantra_98657_hd.jpg" ,"473239.jpg" ,"carpixelnet_2021_hyundai_elantra_98657_hd.jpg" , "hyundai-grandeur-2023.webp" ,"wp2562720.webp" ,"wp2797466.jpg"]
//get Random Number

//Random background option

let unt = document.querySelector(".setting_container .option-box .yes")


let backgroundOption;

//variable to control the background tntrval
let backgroundInterval;
 
//check if there is local storage Random backgrund Item
let backgroundlocalItem =localStorage.getItem("background_option")
//check if Random backgrund Item is not EMpty
if(backgroundlocalItem !== null){
if(backgroundlocalItem === 'true'){
backgroundOption = true
RandomizeImge()
}else{
    backgroundOption = false
  clearInterval(backgroundInterval)
}

document.querySelectorAll(".option-box span").forEach(el =>{
    el.classList.remove("active")
});

if(backgroundOption === true )
document.querySelector(".option-box .yes").classList.add("active");
} 

if(backgroundOption === false ){
    document.querySelector(".option-box .No").classList.add("active");  
    console.log(backgroundOption )
}
//function Random background imge
function RandomizeImge(){
if(backgroundOption === true){
backgroundInterval= setInterval(()=>{
    let random = Math.floor(Math.random() * imgsArray.length)
    //change Background imgsurl

 landing.style.backgroundImage= 'url("./imges/' + imgsArray[random] +'")'

},5000)
}
}

// toggle spin class on Icon
let setting = document.querySelector(".setting_Box .toggle-set").onclick=function(e){
    e.stopPropagation()
    //toggle class open .setting_Box .toggle-set
 this.classList.toggle("open")  
 ////toggle class open in the .setting_Box .toggle-set
 document.querySelector(".setting_Box ").classList.toggle("open")
 ////toggle class fa-spin
  document.querySelector(".setting_Box .toggle-set .fa-gear").classList.toggle("fa-spin")
   
}
let uoser1 = document.querySelector(".setting_Box.open")
let uoser = document.querySelector(".setting_Box")
document.addEventListener("click",(w)=>{
    if(w.target !== setting && w.target !== uoser ){
        if(uoser.classList=="setting_Box open")
   uoser.classList.remove("open")
    }
})

//check if there's local storage color option
let mainColors = localStorage.getItem("color_option")
if(mainColors !== null){
    document.documentElement.style.setProperty("--mane-clore", localStorage.getItem("color_option"))
document.querySelectorAll("option-box .colors-list li").forEach((element)=>{
    element.classList.remove("active")
})
}
// switch colors
let colors = document.querySelectorAll(".option-box .colors-list li")
colors.forEach ((li)=>{
    li.onclick=function(e){

    document.documentElement.style.setProperty("--mane-clore",e.target.dataset.color)
//setItem form the li colors
    localStorage.setItem("color_option", e.target.dataset.color)
    
    // Remove Actev class from All Childered
    manTist(e)
    }
})



// switch background
let background = document.querySelectorAll(".option-box span")
background.forEach(span =>{
    span.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach((el)=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active")

        if(e.target.dataset.background =="yes"){
   backgroundOption= true
   RandomizeImge()
  localStorage.setItem("background_option",true)
        }else{
            backgroundOption = false
        clearInterval(backgroundInterval)
        localStorage.setItem("background_option",false)
        }
        
    })
})

//chock on the maun 
function manTist(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach((element)=>{
        element.classList.remove("active")
        //Add active class on self
        
           })
           ev.target.classList.add("active")
}


