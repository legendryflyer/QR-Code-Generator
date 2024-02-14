// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=


let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById( "qrImage" ) 
let qrInput = document.getElementById("qrInput")



function generate(){
    if (qrInput.value.length > 0){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value
        imgBox.classList.add("show-img")
    }
    else{
        qrInput.classList.add('error')
        setTimeout(function(){
            qrInput.classList.remove('error')
        },1000)

    }
    
} 