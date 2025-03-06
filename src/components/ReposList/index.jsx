import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false); // Estado para erro

    useEffect(() => {
        if (!nomeUsuario) return; // Se não tiver usuário, não faz a requisição
        
        setEstaCarregando(true);
        setErro(false); // Reseta erro antes de buscar

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Usuário não encontrado"); // Força erro se o status não for 200
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                }, 2000);
            })
            .catch(() => {
                setErro(true); // Define erro como verdadeiro se a requisição falhar
                setEstaCarregando(false);
            });

    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <div className={styles['loader-wrapper']}>
                    <div className={styles.loader}></div>
                </div>
            ) : erro ? (
                <h1 style={{ color: "red" }}>Usuário inexistente!</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {repositorio.name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {repositorio.language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={repositorio.html_url} rel="noopener noreferrer">Acessar o repositório</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReposList;
