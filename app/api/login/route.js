// pages/api/login.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/user'; // Importar o modelo existente
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

async function connectToDatabase() {
    await dbConnect();
}

export async function POST(request) {
    await connectToDatabase();

    const { email, password } = await request.json();
    console.log("Dados recebidos:", { email, password });

    // Busca o usuário no banco de dados
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        console.log("Usuário não encontrado");
        return NextResponse.json({ success: false, message: 'Usuário não encontrado' }, { status: 401 });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
        console.log("Login bem-sucedido");
        return NextResponse.json({ success: true }, { status: 200 });
    } else {
        console.log("Senha incorreta");
        return NextResponse.json({ success: false, message: 'Senha incorreta' }, { status: 401 });
    }
}