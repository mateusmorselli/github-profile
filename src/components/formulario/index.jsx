import { useState, useEffect } from "react";

const Formulario = () => {

    let [materiaX, setMateriaX] = useState(0);
    let [materiaY, setMateriaY] = useState(0);
    let [materiaZ, setMateriaZ] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log('a materia X mudou para ' + materiaX)
    }, [materiaX, materiaY, materiaZ])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaX + materiaY + materiaZ;
        const media = soma/3;

        if (media >= 7) {
            return (<p>{nome}: Aprovado!</p>)
        } else return (<p>{nome}: Reprovado</p>)
    }

    return (
        <form>

            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria X" onChange={evento => setMateriaX(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria Y" onChange={evento => setMateriaY(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria Z"onChange={evento => setMateriaZ(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;