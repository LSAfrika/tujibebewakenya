import  {initializeApp}  from "firebase/app";
//https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js
import {getFirestore,collection, getDocs,addDoc} from "firebase/firestore"
//https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js

const firebaseConfig = {

  apiKey: "AIzaSyA-3s7IKA1ruwHg9MNf-lhtzY-chy4wbu4",

  authDomain: "wakenya-tujibebe-party.firebaseapp.com",

  projectId: "wakenya-tujibebe-party",

  storageBucket: "wakenya-tujibebe-party.appspot.com",

  messagingSenderId: "355806812974",

  appId: "1:355806812974:web:fb001c145c2994175838bf",

  measurementId: "G-JKT9NG1Q8L"

};



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

// console.log('btn: ',economicempowerment)
// QUERY SELECTORS
const values_section=document.querySelectorAll('.title');
const cards =document.querySelectorAll('.card')

const animationcard = document.querySelectorAll('#cardanim')
const form = document.querySelector('#form')
const formtext = document.querySelector('#formtext');

//firebase
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
//retrievedata()




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
    let active =false;
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

        console.log('backdrop clicked')
    })

    let n=0
    newslinks.forEach(link=>{
n++
console.log('n',n)
console.log('links length',link)
        link.addEventListener("click",()=>{
        modalbackdrop.classList.add('flex')
        modalbackdrop.classList.remove('hidden')
        const title= link.parentElement.children[1].innerHTML
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
console.log('btn: ',socialempowerment)

    techempowerment.addEventListener('click',()=>{
        modaltite.textContent =' technological empowerment'
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


