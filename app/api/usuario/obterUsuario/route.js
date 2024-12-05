// app/api/usuario/obterUsuario/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ success: false, message: 'Email não fornecido.' }, { status: 400 });
    }

    // Aqui você pode buscar informações do usuário no banco de dados
    console.log(`Buscando informações para o usuário: ${email}`);

    // Simulação de busca no banco de dados...
    
    return NextResponse.json({ 
        success: true, 
        message: 'Usuário encontrado!', 
        email 
        // ...outras informações do usuário
    });
}