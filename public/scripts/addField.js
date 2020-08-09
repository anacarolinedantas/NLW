//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar campos. Que campos??
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //pegar os campos. Que campos??
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        field.value = ""
        //pega o field do momento e limpa ele
    })

    //colocar na página. Onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}