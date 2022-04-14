import  {initializeApp}  from "firebase/app";
// import Splide from '@splidejs/splide';

import {getFirestore,collection, getDocs,addDoc} from "firebase/firestore"





// FORM FILEDS
const surname = document.getElementById('surname')
const othernames = document.getElementById('othernames')
const nationalid = document.getElementById('nationalid')
const email = document.getElementById('email')
const county = document.getElementById('county')
const required = document.querySelectorAll('#required')
const formbtn = document.getElementById('formbutton')
const modal= document.getElementById('modal')
const burgermenu = document.getElementById('burger')
const mobilemenu = document.getElementById('mobile')
const modalbackdrop = document.getElementById('newss')
const modalpane = document.getElementById('newsmodal')
const economicempowerment = document.getElementById('economic')
const socialempowerment = document.getElementById('social')
const techempowerment = document.getElementById('tech')
const newslinks = document.querySelectorAll('#newslinks')
const links = document.querySelectorAll('#links')
const modaltite = document.getElementById('modaltitle')
const modalcontent = document.getElementById('modalcontent')

const scrollrect = document.getElementById('scrollrect')
console.log('rect: ',scrollrect.scrollWidth)



const slide_1=document.getElementById('imgopacity1')
const slide_2=document.getElementById('imgopacity2')
const slide_3=document.getElementById('imgopacity3')
const economictag=document.getElementById('economictag')
const socialtag=document.getElementById('socialtag')
const technologytag=document.getElementById('technologytag')




// QUERY SELECTORS

const values_section=document.querySelectorAll('.title');
const cards =document.querySelectorAll('.card')

const animationcard = document.querySelectorAll('#cardanim')
const form = document.querySelector('#form')
const formtext = document.querySelector('#formtext');

//firebase

const firebaseConfig = {

    apiKey: "AIzaSyA-3s7IKA1ruwHg9MNf-lhtzY-chy4wbu4",
  
    authDomain: "wakenya-tujibebe-party.firebaseapp.com",
  
    projectId: "wakenya-tujibebe-party",
  
    storageBucket: "wakenya-tujibebe-party.appspot.com",
  
    messagingSenderId: "355806812974",
  
    appId: "1:355806812974:web:fb001c145c2994175838bf",
  
    measurementId: "G-JKT9NG1Q8L"
  
  };
  
  
  // Initialize Firebase
  
  initializeApp(firebaseConfig);
  
const db = getFirestore()
const memberscollection =collection(db,'members')



async function  retrievedata(){

    try {
        const snapshot = await getDocs(memberscollection)
        snapshot.forEach(doc=>{
            console.log('retrieved data: ',doc.data())
        
            })
        
    } catch (error) {
    console.log('firebase read error: ',error)

        
    }

}
retrievedata()
let counter=0;
function valuescycle(){
    counter++;

    if(counter===1){
        economictag.classList.add('slide_in')
        economictag.classList.remove('slide_out')
        socialtag.classList.add('initial_pos')
        technologytag.classList.add('slide_out3')


        slide_1.classList.add('fade_in')
        slide_1.classList.remove('fade_out')
        slide_2.classList.add('fade_out')
        slide_3.classList.add('fade_out')
        slide_3.classList.remove('fade_in')
      //  console.log('counter value:',counter)
        
    }
    if(counter===2){
        economictag.classList.remove('slide_in')
        economictag.classList.add('slide_out')
        socialtag.classList.remove('slide_out3')

        socialtag.classList.add('slide_in_2')
        socialtag.classList.remove('slide_out2')


        slide_1.classList.remove('fade_in')
        slide_1.classList.add('fade_out')
        slide_2.classList.remove('fade_out')
        slide_2.classList.add('fade_in')
        slide_3.classList.add('fade_out')
      //  console.log('counter value:',counter)
        
    }
    if(counter===3){

        socialtag.classList.remove('slide_in')
        socialtag.classList.add('slide_out2')
        technologytag.classList.remove('slide_out3')

        technologytag.classList.add('slide_in_3')

        slide_1.classList.remove('fade_in')
        slide_1.classList.add('fade_out')
        slide_2.classList.add('fade_out')
        slide_2.classList.remove('fade_in')
        slide_3.classList.add('fade_in')
        slide_3.classList.remove('fade_out')
     //   console.log('counter value:',counter)
        counter=0;
        
        // console.log('counter reset:',counter)
        
    }
    setTimeout(() => {
        valuescycle()
    }, 8000);



}
valuescycle()


function  formvalue (){
//    surname.value='hello'
//    console.log('surname: ',surname.value)
    if(surname.value.trim()===''){


 
        required[0].classList.remove('hidden')
        
    
    }else{ required[0].classList.add('hidden') }
    if(othernames.value.trim()===''){
        required[1].classList.remove('hidden')
 
        
        
    }else{ required[1].classList.add('hidden') }
    if(nationalid.value.trim()===''){
        required[2].classList.remove('hidden')
 
        
        
    }else{ required[2].classList.add('hidden') }
    if(email.value.trim()===''){
        required[3].classList.remove('hidden')
 
        
        
    }else{ required[3].classList.add('hidden') }
    if(county.value==='select your county'){
        required[4].classList.remove('hidden')
 
    
    }else{ required[4].classList.add('hidden') }


    if(surname.value.trim()===''||othernames.value.trim()===''||nationalid.value.trim()===''||email.value.trim()===''||county.value==='select your county') return;

    const data ={
        surname:surname.value,
        othernames:othernames.value,
        nationalid:parseInt(nationalid.value),
        email:email.value,
        county:county.value


    }
    console.log('form validation complete',data)
    postform(data)

}

async function postform(formval){

    const spinner = document.getElementById('spinner')
    const submitting = document.getElementById('formsubmitting')
    const submitted = document.getElementById('formsubmitted')
    try {

        modal.classList.remove('hidden')
        modal.classList.add('flex')
await  addDoc(memberscollection,formval)

spinner.classList.add('hidden')
submitting.classList.add('hidden')
submitted.classList.remove('hidden')

surname.value=''
othernames.value=''
email.value=''
nationalid.value=''
county.value='select your county'

setTimeout(() => {
    console.log('timmer function ')
 modal.classList.add('hidden')
 modal.classList.remove('flex')

 spinner.classList.remove('hidden')
submitting.classList.remove('hidden')
submitted.classList.add('hidden')

    
}, 2000);
        
    } catch (error) {

        console.log('firebase write error: ',error)

        
    }
}


    // console.log('email: ',email.value)
    let active =true;
    modalpane.addEventListener('mouseenter',()=>{
         active=false;
        console.log('mouse entered')
       
        
       })
    modalpane.addEventListener('mouseleave',()=>{
         active=true;
        console.log('mouse left')
       
        
       })

    modalbackdrop.addEventListener('click',()=>{
if(!active)return

        modalbackdrop.classList.add('hidden')
        modalbackdrop.classList.remove('flex')

      //  console.log('backdrop clicked')
    })

    // let n=0
    newslinks.forEach(link=>{
// n++
//console.log('n',n)
//console.log('links length',link)
        link.addEventListener("click",()=>{
        modalbackdrop.classList.add('flex')
        modalbackdrop.classList.remove('hidden')
       const title= link.parentElement.children[1].innerHTML
    console.log(    link.parentElement.children[1].innerHTML)
        modaltite.textContent =title
        // console.log('parent el: ',) 

        })
    })
  

    //#region values section
    economicempowerment.addEventListener('click',()=>{
        console.log('emitter working')
        modaltite.textContent =' economic empowerment'
        modalbackdrop.classList.add('flex')
        modalbackdrop.classList.remove('hidden')
    }

    ) 
     socialempowerment.addEventListener('click',()=>{
        modaltite.textContent =' social cutural'
        modalbackdrop.classList.add('flex')
        modalbackdrop.classList.remove('hidden')
    }
    )  
// console.log('btn: ',socialempowerment)

    techempowerment.addEventListener('click',()=>{
        modaltite.textContent =' tech & innovation'
        modalbackdrop.classList.add('flex')
        modalbackdrop.classList.remove('hidden')
    }
    )

    //#endregion


    //FORM BUTTON SUBMIT
    formbtn.addEventListener("click",()=>{
        formvalue()
    })

    burgermenu.addEventListener("click",()=>{
        console.log('menu clicked')
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle('flex')
    })

  //  console.log(links);

    links.forEach(link=>{

        link.addEventListener('click',()=>{
            console.log('links beingclicked')
            
            mobilemenu.classList.remove('flex')
            mobilemenu.classList.add('hidden')
    
    
        })
    

    })
  
 
const cardobserver = new IntersectionObserver(cards=>
    {
   cards.forEach(fstcard=>{

    if (fstcard.isIntersecting) {
        
        fstcard.target.classList.add('cardanimation' );
    }
     
   })

             
   
        
    })

        animationcard.forEach(card=>{
            // console.log('cards: ',card)
            cardobserver.observe(card)
        })
        
   

 const formobserver=new IntersectionObserver(forms=>{
   const  form=forms[0]
         if(form.isIntersecting){
             form.target.classList.add('formanimation')
         }
     
 })
formobserver.observe(form);



const formtextobserver = new IntersectionObserver(ftext=>{
    const textform =ftext[0]
    if(textform.isIntersecting){
        textform.target.classList.add('formtextanimaton')
    }
})

formtextobserver.observe(formtext)

 
    const titleobserver=new IntersectionObserver(entries=>{
   

        entries.forEach(valuestitle=>{
 
       
             if (valuestitle.isIntersecting) {
               
                 valuestitle.target.classList.add('animate-fade-in-left');
   

             }

           })
  
    })
    
    values_section.forEach(titlez=>{

        titleobserver.observe(titlez);
    })


