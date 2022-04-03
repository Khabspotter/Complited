const form=document.querySelector('form')
const res=document.querySelector ('#form_1')
form.addEventListener('submit',(event)=>{
    if (res.value != false){
        alert(`👉${res.value}👈`)
    } else {
        alert('Введите запрос!')
    };
         event.preventDefault()
        }
        )