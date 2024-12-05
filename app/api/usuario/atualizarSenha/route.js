// app/api/usuario/atualizarSenha/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect'; // Função para conectar ao banco de dados
import User from '../../../models/user'; // Modelo do usuário
import bcrypt from 'bcryptjs'; // Use bcryptjs para hashing

export async function POST(request) {
    await dbConnect(); // Conecta ao banco de dados

    const data = await request.json(); // Obtém os dados enviados na requisição

    if (!data.email || !data.password) {
        return NextResponse.json({ success: false, message: 'Email ou senha não fornecidos.' }, { status: 400 });
    }

    try {
        // Encontre o usuário pelo email
        const user = await User.findOne({ email: data.email });

        if (!user) {
            return NextResponse.json({ success: false, message: 'Usuário não encontrado.' }, { status: 404 });
        }

        // Gere um hash para a nova senha
        const hashedPassword = await bcrypt.hash(data.password, 10); // O número 10 é o número de salt rounds

        // Atualize a senha no banco de dados
        user.password = hashedPassword;
        await user.save(); // Salva as alterações no usuário

        return NextResponse.json({ success: true, message: 'Senha atualizada com sucesso!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Erro ao atualizar senha.' }, { status: 500 });
    }
}