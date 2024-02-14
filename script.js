// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=


let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById( "qrImage" ) 
let qrInput = document.getElementById("qrInput")



function generate(){
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value
}