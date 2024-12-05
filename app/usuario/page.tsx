"use client";

import React, { useState, useEffect } from "react";
import Usuario from "../../components/componentsUsuario/usuario";

export default function UsuarioPage() {
  const [loggedInEmail, setLoggedInEmail] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setLoggedInEmail(email);
      setNewEmail(email); // Inicializa newEmail com o email logado
    }
  }, []);

  const handleLogout = () => {
    setLoggedInEmail(null);
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const handleEmailChange = async () => {
    console.log('Mudando email para:', newEmail);
    
    try {
      const response = await fetch('/api/usuario/atualizarEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentEmail: loggedInEmail, email: newEmail }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar email');
      }

      alert('Email atualizado com sucesso!');
      setLoggedInEmail(newEmail); // Atualiza o estado do email logado
      localStorage.setItem("userEmail", newEmail); // Atualiza o localStorage
    } catch (error) {
      console.error(error);
      alert('Falha ao atualizar o email.');
    }
};

  const handlePasswordChange = async () => {
    console.log('Mudando senha para:', newPassword);
    try {
      const response = await fetch('/api/usuario/atualizarSenha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loggedInEmail, password: newPassword }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar senha');
      }

      alert('Senha atualizada com sucesso!');
      setNewPassword(''); // Limpa o campo de nova senha após a atualização
    } catch (error) {
      console.error(error);
      alert('Falha ao atualizar a senha.');
    }
  };

  const handleResetProgress = async () => {
    console.log('Zerando progresso...');
    
    try {
      const response = await fetch('/api/usuario/zerarProgresso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loggedInEmail }),
      });

      if (!response.ok) {
          throw new Error('Erro ao zerar progresso');
      }

      alert('Progresso zerado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Falha ao zerar o progresso.');
    }
};

  return (
    <div>
      <Usuario 
        loggedInEmail={loggedInEmail} 
        onLogout={handleLogout} 
        onEmailChange={handleEmailChange} 
        onPasswordChange={handlePasswordChange} 
        onResetProgress={handleResetProgress}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />
    </div>
  );
}