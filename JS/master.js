
// select skills selector
document.onscroll=function(){

 if( scrollY >=1190){
   let a= document.querySelectorAll(".gallery .container .images-box img")
   a.forEach(img =>{
    img.style.animation ="transition 1s linear"
   }) 
 }else if(scrollY >=1250){
    a.forEach(img =>{
        img.style.animation ="transition 1s linear"
       }) 
 }
} 
//create popup with Tmage

let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img =>{




    //
    img.addEventListener("click" , (e)=>{

        // create Overlay Element
        let Overlay = document.createElement("div")

        //Add class to overlay 
        Overlay.className = ("popup-overlay")
        
        //Append Overlay  to the Body

        document.body.appendChild(Overlay)

        //create the popup 

        let popupBox = document.createElement("div")
   
        //Add the popup class

        popupBox.className ="popup-Box "
 //create the Iamge 
        let popupImage = document.createElement("img")
        popupImage.src = img.src
        Overlay.appendChild(popupBox)
        popupBox.appendChild(popupImage)
        let link = document.createElement("a")
        popupBox.appendChild(link)
        link.appendChild(popupImage)
        link.href=img.alt
            //create a cloce span 
            popupImage.onclick=(e)=>{
              console.log(img.alt)
            }
    let cloce =document.createElement("span")
    cloce.className="cloce"
   let nots = document.createTextNode("X")
   cloce.appendChild(nots)
    popupBox.appendChild(cloce)
    
    cloce.onclick=function(){
        Overlay.remove()
    }
    })
  
})


let e = 1 ;
let tt = 0;
setInterval(()=>{
    let a =document.querySelector(".introduction-text span")
    let s = ["Web Developer !","Photoshop" , "Freelancers"]
   a.innerHTML = s[tt].slice(0, e)

    e++
    if(e > s[tt].length){
        e = 1
        tt++
    }
     if(tt+1 > s.length){
       tt = 0
    }
},2000)


document.querySelectorAll(".features .feat-box ").forEach(img =>{
    //

    $(img.firstElementChild).click((e)=>{

        // create Overlay Element
        let Overlay1 = document.createElement("div")

        //Add class to overlay 
        Overlay1.className = ("popup-overlay")
        
        //Append Overlay  to the Body

        document.body.appendChild(Overlay1)

        //create the popup 

        let popupBox = document.createElement("div")
   
        //Add the popup class

        popupBox.className ="popup-Box "

    
        // creat a new titel
        let a = document.createElement("h3")
        a.className="titel"
        popupBox.appendChild(a)
        let es = document.createTextNode(img.children[1].innerHTML)
        a.appendChild(es)
    
        
     

         //create the Iamge 
         let popupImage = document.createElement("img")
         popupImage.src = img.firstElementChild.src
         Overlay1.appendChild(popupBox)
         popupBox.appendChild(popupImage)
             //create a cloce span 
 
     let cloce =document.createElement("span")
     cloce.className="cloce"
    let nots = document.createTextNode("X")
    cloce.appendChild(nots)
     popupBox.appendChild(cloce)
     
     cloce.onclick=function(){
         Overlay1.remove()
     }
     //create the parargraph in the popup-Box 
     let pr = document.createElement("p")
     pr.className = "tixstnote"
     let mo = document.createTextNode(img.children[2].innerHTML)
     pr.appendChild(mo)
     popupBox.appendChild(pr)
    })

})


    $(".testmionsals .container .span").click(()=>{

        let Overlay1 = document.createElement("div")

        //Add class to overlay 
        Overlay1.className = ("popup-overlay")
        document.body.appendChild(Overlay1)
        
        let popupBox = document.createElement("div")
   
        //Add the popup class
        popupBox.className ="popup-Box "
        Overlay1.appendChild(popupBox)

        //creat a your name
        let name = document.createElement("input")
        name.type="text"
        name.className="text2"
        name.placeholder="your name "
        name.required=true
        popupBox.appendChild(name)
              //creat a comment
        let comment =document.createElement("input")
        comment.type="text"
        comment.required=true
        comment.className="comment"
        comment.placeholder="your Message"
        popupBox.appendChild(comment)
      
              //creat a company
              let company =document.createElement("input")
              company.type="text"
              company.className="comment"
              company.placeholder="your company"
              popupBox.appendChild(company)
        // creat a span cansle
        let span = document.createElement("span")
        span.className="cloce"
        let x = document.createTextNode("X")
        span.appendChild(x)
        popupBox.appendChild(span)
        $(".cloce").click(()=>{
            Overlay1.remove()
        })
              // creat a input img
              let div = document.createElement("div")
              div.className="div_file"
              popupBox.appendChild(div)
              let a = document.createElement("input")
              a.className ="fils"
              a.type="file";
              div.appendChild(a)
              let div_text = document.createTextNode("Upload your img")
              let span_tow = document.createElement("span")
              span_tow.className="text_span"
              span_tow.appendChild(div_text)
              div.appendChild(span_tow)

        //creat  a batton 
        let batton = document.createElement("button")
         batton.className="input"
          let text = document.createTextNode("Add")
          batton.appendChild(text)
          popupBox.appendChild(batton)


        batton.onclick =function(e){
            if(name.value.length > 3 && company.value.length > 3 && comment.value.length && a.files[0] !== undefined){
               
                let noed= document.querySelector(".testmionsals .container ")
                //add the div ts-box
                let tsbox = document.createElement("div")
                tsbox.className="ts-box"
                noed.appendChild(tsbox)
                
                //creat in the div
                let personInfo = document.createElement("div")
                personInfo.className="person-info"
                tsbox.appendChild(personInfo)
                //add the img insied div
                let img = document.createElement("img")
                personInfo.appendChild(img)
                let h4 = document.createElement("h4")
                personInfo.appendChild(h4)
                let p2 = document.createElement("p")
                personInfo.appendChild(p2)
                
                              //add the p insied div
                    let pr = document.createElement("p")
                       tsbox.appendChild(pr)
                       //add the img insied div   
                console.log(img.src =`imges/${a.files[0].name}`)
                img.src =`imges/${a.files[0].name}`
                a.remove()
           console.log(name.value)
           h4.innerHTML = name.value
           pr.innerHTML =comment.value
           p2.innerHTML = company.value
           Overlay1.remove()
            }
            }
      })

    let nav = document.querySelectorAll(" .nav-bullets .bullet")
    
    // for(let i = 0 ; i<= nav.length ; i++){
    //    nav[i].onclick = function(e){
    //     document.querySelector(`.${e.target.dataset.name}`).scrollIntoView({
    //         behavior:"smooth"
    //     })
    //    }    
    // }
let ul = document.querySelectorAll(".landing-page .header-area ul li")
console.log(ul)

    function scrollIntoView (Element){
       Element.forEach((ele)=>{
       
        ele.onclick = function(e){
            e.preventDefault()
            document.querySelector(`.${e.target.dataset.name}`).scrollIntoView({
                behavior:"smooth"
            })
           } 
       })
           
    }

scrollIntoView(nav)
scrollIntoView(ul)




let bulletLocal = localStorage.getItem("Item")
if(bulletLocal !== null){
    let a = document.querySelectorAll(" .setting_container  .option-box .bullets_option span")
    a.forEach((span)=>{
        span.classList.remove("active")
    })
    if(bulletLocal ==="block"){
        document.querySelector(".nav-bullets").style.display= "block"
        document.querySelector(".option-box .bullets_option .yes").classList.add("active")
    }else{
        document.querySelector(".nav-bullets").style.display= "none"
        document.querySelector(".option-box .bullets_option .No").classList.add("active")
    }
}
let a = document.querySelectorAll(" .setting_container  .option-box .bullets_option span").forEach((e)=>{
    e.onclick = function(t){
if(e.dataset.display === "none"){
    document.querySelector(".nav-bullets").style.display= e.dataset.display
    localStorage.setItem("Item",e.dataset.display)
}else{
    document.querySelector(".nav-bullets").style.display= e.dataset.display
    localStorage.setItem("Item",e.dataset.display)
    }

    manTist(t)
}
   
})

let header =document.querySelector(".header-area .toggle1")
let landingPage = document.querySelector(".landing-page .header-area ul")

header.onclick=(e)=>{
    e.stopPropagation()
if(landingPage.style.display === "none"){
    landingPage.style.display = "block" 
}else{
    landingPage.style.display ="none"
}
  }

 function user(header1,landingPage1){
    document.addEventListener("click",(e)=>{
        if(e.target !== header1 && e.target !== landingPage1){
         if(landingPage.style.display === "block"){
                landingPage.style.display = "none"
         }
        }
      })
  
      landingPage.onclick=function(e){
          e.stopPropagation()
      }
 } 

 user(header,landingPage)
 