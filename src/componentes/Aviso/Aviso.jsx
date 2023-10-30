import React, { useEffect, useState } from "react";
import './Aviso.css'


export default function Aviso() {
    const [informacao, setInformacao] = useState("");
    const [versao, setVersao] = useState("");

    useEffect(() => {
        setInformacao("EXPERIMENTAL");
        setVersao("V.23-11.1.0.6 (aberta)");
    }, []);

    return (
        <div id="txtAviso">
            {informacao} <br />
            {versao}
        </div>
    );
}
