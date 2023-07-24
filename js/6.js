const inputId = document.getElementById('validation-input');

    function checkInputLength() {
      const dataLength = +inputId.getAttribute('data-length');
      inputId.classList.toggle('valid', inputId.value.length === dataLength);
      inputId.classList.toggle('invalid', inputId.value.length !== dataLength);
    }

    inputId.addEventListener('blur', checkInputLength);