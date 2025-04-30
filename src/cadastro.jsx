import React, { useState } from 'react';
import styles from './Cadastro.module.css';

export function Cadastro() {
  const [mostrarComprador, setMostrarComprador] = useState(false);
  const [mostrarArtesao, setMostrarArtesao] = useState(false);

  return (
    <div className={styles.container}>
      {/* Botões superiores */}
      <div className={styles.topButtons}>
        <button className={styles.entrar}>ENTRAR</button>
        <button className={styles.cadastrar}>CADASTRAR</button>
      </div>

      <h2 className={styles.title}>
        <span className={styles.plus}>+</span> Cadastre-se
      </h2>

      <div className={styles.sections}>
        {/* Seção Comprador */}
        <div className={styles.card}>
          <button
            className={styles.toggleButton}
            onClick={() => setMostrarComprador(!mostrarComprador)}
          >
            <span role="img" aria-label="user">👤</span> Comprador
          </button>
          {mostrarComprador && (
            <div className={styles.form}>
              <p>Informações pessoais</p>
              <input placeholder="Nome completo" />
              <input placeholder="CPF (000.000.000-00)" />
              <input placeholder="E-mail" />
              <p>Endereço</p>
              <input placeholder="País/Estado (Ex.: Brasil-PE)" />
              <input placeholder="CEP" />
              <p>Criar senha</p>
              <input placeholder="No mínimo 8 caracteres" type="password" />
            </div>
          )}
        </div>

        {/* Seção Artesão */}
        <div className={styles.card}>
          <button
            className={styles.toggleButton}
            onClick={() => setMostrarArtesao(!mostrarArtesao)}
          >
            <span role="img" aria-label="user">👤</span> Artesão
          </button>
          {mostrarArtesao && (
            <div className={styles.form}>
              <p>Informações pessoais</p>
              <input placeholder="Nome completo" />
              <input placeholder="CPF (000.000.000-00)" />
              <input placeholder="E-mail" />
              <p>Endereço</p>
              <input placeholder="País/Estado (Ex.: Brasil-PE)" />
              <input placeholder="CEP" />
              <p>Criar senha</p>
              <input placeholder="No mínimo 8 caracteres" type="password" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
