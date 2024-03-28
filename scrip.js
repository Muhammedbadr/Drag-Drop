let inputs = document.getElementById("inp")
let btn = document.getElementById("btn")
let box = document.querySelectorAll(".box")
let drag = null


btn.onclick = function(){
    if(inputs.value != ""){
        box[0].innerHTML += `
        <p class="itme" draggable="true">${inputs.value}</p>
        `
        inputs.value = ""
    }
    dragitem()
}


function dragitem()
{
    let items = document.querySelectorAll(".itme")
    items.forEach(item => {
        item.addEventListener("dragstart" , function(){
            drag = item;
            item.style.opacity = "0.5"
        })
        item.addEventListener("dragend" , function(){
            drag = null;
            item.style.opacity = "1"
        })

        box.forEach(box => {
            box.addEventListener("dragover" , function(e){
                e.preventDefault()
                this.style.background=" rgb(102, 148, 3)"
            })


        box.addEventListener("dragleave", function () {
            this.style.background = "orange"
        })



        box.addEventListener("drop" , function(){
            box.append(drag)
            this.style.background = "orange"

        })
    })

    })

}
