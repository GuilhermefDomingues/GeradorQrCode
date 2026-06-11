let qrText = document.querySelector("#qrText");
let generateBtn = document.querySelector("#generateBtn");
let qrCode = document.querySelector("#qrCode");
let downloadBtn = document.querySelector("#downloadBtn");

function gerarQRCode() {
  if (qrText.value === "") {
    alert("Digite um texto ou URL");
    return;
  }

  qrCode.innerHTML = "";

  new QRCode(qrCode, {
    text: qrText.value,
    width: 230,
    height: 230,
  });
}

function baixarQRCode() {
  let img = qrCode.querySelector("img");

  if (!img) {
    alert("Gere um QR Code primeiro");
    return;
  }

  let link = document.createElement("a");
  link.href = img.src;
  link.download = "qrcode.png";
  link.click();
}

generateBtn.addEventListener("click", gerarQRCode);
downloadBtn.addEventListener("click", baixarQRCode);