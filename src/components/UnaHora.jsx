import React, { useEffect } from "react";
import "../styles/css/unahora.css";

function UnaHora() {
  useEffect(() => {
    // Define una función para cambiar el favicon en función de la ruta actual
    const changeFavicon = () => {
      const faviconPath =
        location.pathname === "/1hora" ? "/fav_1hora.webp" : "/fav-icon.png"; // Cambia los nombres de los archivos según tus necesidades
      const name = location.pathname === "/1hora" ? "1Hora" : "Tecnosuper";
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = faviconPath;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = faviconPath;

        document.head.appendChild(newLink);
      }
      document.title = name;
    };
    // Llama a la función para cambiar el favicon cada vez que cambie la ubicación
    changeFavicon();
  }, [location]);

  return (
    <div className="unahora">
      <iframe
        title="1hora"
        height="100%"
        width="100%"
        frameborder="0"
        allowTransparency="true"
        scrolling="auto"
        src="https://creatorapp.zohopublic.com/vt.cel/tecnosuper/report-embed/Accesorios_1hora/qBn9SAJHRJr5k3GWFMfqwM2PsRafP2NJakuKBRqC93TJVTbYCdQEaMSG0YfJKAWR8XKDr21dT6Uq77DTqA0FmZMGNkApaPyWyJr5"
      ></iframe>
    </div>
  );
}

export default UnaHora;
