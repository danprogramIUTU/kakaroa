//Esto es para que al momento de dar en el boton de pedir lleve  al chat de whatsapp 
const PHONE_NUMBER = "573227840184";

function orderOnWhatsApp(productName) {
    const message = `Hola! Vengo de la página web de Kakaroa y me gustaría pedir: ${productName}.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

