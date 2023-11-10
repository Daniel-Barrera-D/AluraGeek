const $form = document.querySelector("[data-form]");

Swal.fire(
    'Datos de acceso',
    '<b>Correo Electrónico: </b>admin@email.com<br><b>Contraseña: </b>Admin321',
    'info'
  )

function validar() {
    let deshabilitar = false;
    const $span = document.querySelector("[data-span]");
    const $button = document.querySelector("[data-button]");
    const $email = document.querySelector("[data-email]").value;
    const $password = document.querySelector("[data-password]").value;

    if($email === "" || $password === "") {
        deshabilitar = true;
    }

    if(deshabilitar === true) {
        $span.classList.add("span");
        $button.classList.add("disabled");
        $button.disabled = true;
    }else {
        $span.classList.remove("span");
        $button.classList.remove("disabled");
        $button.disabled = false;
    }
}

$form.addEventListener("keyup", validar);

$form.addEventListener("submit", e => {
    e.preventDefault();
    const dataEmail = "admin@email.com";
    const datapass = "Admin321";
    const $email = document.querySelector("[data-email]").value;
    const $password = document.querySelector("[data-password]").value;

    // console.log(dataEmail === $email, datapass === $password);
    if(dataEmail === $email && datapass === $password) {
        window.location.href = "../html/menu-administrador.html";
    }else  {
        Swal.fire(
            'Acceso denegado :(',
            'El email o la contraseña es incorrecto.',
            'error'
          )
    }
})