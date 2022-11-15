require("./style.scss")

document.addEventListener('DOMContentLoaded', function () {
    const form=document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let error=formValidate();
        let formData=new FormData(form)

        if(!error){
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                form.reset();
                alert(json.id)
                
            })
            .catch(error=>{
                console.log(error)
            })

        } else alert("Поле должно быть заполненно (только цифрами)");
    });
    const input = document.querySelector("#req")
    input.addEventListener("input", (e)=>{
        formRemoveError(e.target);
        if(reqCheck(e.target)){
            formAddError(e.target)
        }
    })

    function formValidate () {
        let formReq=document.querySelector('#req');
        return reqCheck(formReq)
    }

    function reqCheck(input){
        return !(/^\d+/.test(input.value));
    }
    function formAddError (input) {
        input.parentElement.classList.add('error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('error');
    }
})

