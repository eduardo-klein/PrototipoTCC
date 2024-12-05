// app/api/progresso/reset/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect'; // Conexão com o banco de dados
import User from '../../../models/user'; // Modelo do usuário

export async function POST(request) {
    await dbConnect(); // Conecta ao banco de dados

    const data = await request.json(); // Obtém os dados enviados na requisição

    if (!data.email) {
        return NextResponse.json({ success: false, message: 'Email não fornecido.' }, { status: 400 });
    }

    try {
        const user = await User.findOneAndUpdate(
            { email: data.email }, // Filtra pelo email do usuário
            { progresso: [] }, // Reseta o progresso
            { new: true } // Retorna o documento atualizado
        );

        if (!user) {
            return NextResponse.json({ success: false, message: 'Usuário não encontrado.' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Progresso zerado com sucesso!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Erro ao zerar progresso.' }, { status: 500 });
    }
}