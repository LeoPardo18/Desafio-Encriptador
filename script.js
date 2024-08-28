const textArea = document.querySelector('.text-area textarea')
const encrypterResult = document.querySelector('.outputText')

const btnEncriptar=()=>{
    if (textArea.value === ""){
        toogleEncrypterResult(false)
        return
    }
    const textoEncriptado = encriptar(textArea.value)
    encrypterResult.innerHTML = textoEncriptado
    toogleEncrypterResult(true)
}

const btnDesencriptar=()=>{
    if (textArea.value === ""){
        toogleEncrypterResult(false)
        return
    }
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.innerHTML = textoEncriptado;
    toogleEncrypterResult(true)
}

const encriptar = (value) =>{
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    value = value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(value.includes(matrizCodigo[i][0])){
            value = value.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return value;
}

const desencriptar=(value)=>{
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    value = value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(value.includes(matrizCodigo[i][0])){
            value = value.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return value;
}

const copiar = () =>{
    let texto = document.getElementById("p-result");
    // Crear un rango de selección para el contenido del párrafo
    let range = document.createRange();
    range.selectNodeContents(texto);
    
    // Limpiar cualquier selección anterior y seleccionar el rango
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    // Copiar el texto seleccionado al portapapeles
    try {
        document.execCommand("copy");
        alert("Texto copiado: " + texto.innerText);
    } catch (err) {
        console.error("Error al copiar: ", err);
    }
    
    // Limpiar la selección después de copiar
    selection.removeAllRanges();
}

const toogleEncrypterResult=(toogle)=>{
    const imgResult = document.querySelector('#img-result')
    const titleResult = document.querySelector('#title-result')
    const btnCopiar = document.querySelector('#btnCopiar')

    if (toogle){
        imgResult.classList.remove('imgEncryptResult')
        imgResult.classList.add('imgHidden')
        titleResult.style.display = 'none'
        btnCopiar.style.display = 'initial'
    }else{
        imgResult.classList.remove('imgHidden')
        imgResult.classList.add('imgEncryptResult')
        titleResult.style.display = 'initial'
        btnCopiar.style.display = 'none'
    }
}