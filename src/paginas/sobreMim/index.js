import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Mauro!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Mauro Alves"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de estar por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na década de 80 (1980), quando comprei im TK90X e algumas revistas de programação em banca de jornal. Eu aprendi lógica de programação e o básico de várias linguagens, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Engenharia Elétrica na Universidade de Mogi das Cruzes (UMC) onde me formei em 1986. Ainda não existia nada referente a TI.
            </p>
            <p className={styles.paragrafo}>
                Com o tempo entrei para a área de automação industrial e trabalhei no EAD do SENAI SP, isso em 2007.
            </p>
            <p className={styles.paragrafo}>
                Estudei várias linguagens de programação de Controladores Lógicos Programaveis (CLP) e também de Interface Homem Máquina (IHM).
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de estar estudando aqui. Espero aprender bastante!
            </p>
        </PostModelo>
    )
}