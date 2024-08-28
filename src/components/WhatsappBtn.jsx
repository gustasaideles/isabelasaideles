import React from "react";

function WhatsappBtn() {
  return (
    <div className="zi" style={{ position: "fixed", bottom: "20px", right: "30px" }}>
      <a href="https://wa.me/+5548999676564?text=Olá, gostaria de agendar um horário" target="_blank" rel="noreferrer">
        <img
          src="../whatsappLogoB.svg"
          alt="WhatsApp"
          aria-label="Enviar mensagem whatsapp" 
          style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        />
      </a>
    </div>
  );
}

export default WhatsappBtn;
