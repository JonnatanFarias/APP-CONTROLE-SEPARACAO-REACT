import axios from 'axios';
import './Tabela.css';
import { useEffect, useState } from 'react';
import LinhaTabela from '../LinhaTabela/LinhaTabela';

export default function Tabela({status}) {

    const [dados, setDados] = useState([])
    const dtAtual = new Date();
    
    const [quantidadeRegistros, setQuantidadeRegistros] = useState('all');

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {

                let teste = response.data
                setDados(teste)
                    
            }).catch((erro) => {
                    console.log(erro)
            })
    
    }, [dados])

    function handleFiltro(value) {
        setQuantidadeRegistros(value);
      }
    return (
        <main className="container">
            <select  defaultValue={"all"} className='selectQtReg' onChange={(e) => handleFiltro(e.target.value)}>
            <option value="10">10-Registros</option>
            <option value="20">20-Registros</option>
            <option value="30">30-Registros</option>
            <option value="40">40-Registros</option>
            <option value="50">50-Registros</option>
            <option value="all">Todos os registros</option>
            </select>

            <table>
                <thead>
                    <tr>
                        {!status && <th>Excluir</th>}
                        <th>Separador</th>
                        <th>Numero do Pedido</th>
                        <th>Tempo de Inicio</th>
                        <th>Tempo Real</th>
                        <th>Tempo de Fim</th>
                        <th>Tempo de Duração</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {dados 
                .filter((dado) => (dado.dataSep >= dtAtual.toLocaleDateString() || dado.pausado) && dado.status === status)
                .slice(0, quantidadeRegistros === 'all' ? dados.length : Number(quantidadeRegistros))
                .map((dado) => 
                  (
                <LinhaTabela
                    id={dado.id}
                    pausado={dado.pausado}
                    separador={dado.separador}
                    numeroPedido={dado.numeroPedido}
                    status={dado.status}
                    tempoInicio={dado.tempoInicio}
                    key={dado.id}
                />
                ))}
                </tbody>
            </table>
        </main>
    )
}