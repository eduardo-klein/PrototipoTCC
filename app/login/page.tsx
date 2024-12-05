"use client";

import React from 'react';
import StyledLogin from "../../components/componentsLogin/login";
import { useUser } from '../context/usuarioContexto';

export default function LoginPage() {
  const { setUserEmail } = useUser();

  const handleLogin = (email: string) => {
    console.log('Usuário logado:', email);
    setUserEmail(email); // Atualiza o estado com o email do usuário logado

    // Redireciona imediatamente após o login
    console.log('Redirecionando para a página inicial...');
    window.location.href='/'; // Redireciona para a página inicial ou dashboard
  };

  return (
    <div>
      <StyledLogin onLogin={handleLogin} />
    </div>
  );
}