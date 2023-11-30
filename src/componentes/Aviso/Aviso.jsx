import React, { useEffect, useState } from "react";
import './Aviso.css'


export default function Aviso() {
    const [informacao, setInformacao] = useState("");
    const [versao, setVersao] = useState("");

    useEffect(() => {
        setInformacao("⚠️(BETA 1)⚠️");
        setVersao("V.23-12.2.0.12-(aberta)");
    }, []);

    return (
        <div id="txtAviso">
            {informacao} <br />
            {versao}
        </div>
    );
}
