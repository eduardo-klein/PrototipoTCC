// app/api/usuario/atualizarEmail/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect'; // Função para conectar ao banco de dados
import User from '../../../models/user'; // Modelo do usuário

export async function POST(request) {
    await dbConnect(); // Conecta ao banco de dados

    const data = await request.json(); // Obtém os dados enviados na requisição

    if (!data.currentEmail || !data.email) {
        return NextResponse.json({ success: false, message: 'Emails não fornecidos.' }, { status: 400 });
    }

    try {
        // Encontre o usuário pelo email atual
        const user = await User.findOneAndUpdate(
            { email: data.currentEmail }, // Filtra pelo email atual do usuário
            { email: data.email }, // Atualiza para o novo email
            { new: true } // Retorna o documento atualizado
        );

        if (!user) {
            return NextResponse.json({ success: false, message: 'Usuário não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Email atualizado com sucesso!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Erro ao atualizar email.' }, { status: 500 });
    }
}