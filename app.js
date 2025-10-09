//isso manipula o DOM
const btn = document.getElementById("meuBotao");

btn.addEventListener("click", function(){

    Swal.fire({
        title: "Aviso",
        icon: "warning",
        confirmButtonText: "Ok",

        })
});