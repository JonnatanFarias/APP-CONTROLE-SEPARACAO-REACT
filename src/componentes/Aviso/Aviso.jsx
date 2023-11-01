import React, { useEffect, useState } from "react";
import './Aviso.css'


export default function Aviso() {
    const [informacao, setInformacao] = useState("");
    const [versao, setVersao] = useState("");

    useEffect(() => {
        setInformacao("⚠️(BETA)");
        setVersao("V.23-11.2.0.11-(aberta)");
    }, []);

    return (
        <div id="txtAviso">
            {informacao} <br />
            {versao}
        </div>
    );
}
