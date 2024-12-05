import dbConnect from '../../lib/dbConnect';
import User from '../../models/user'; // Importar modelo do usuário
import { NextResponse } from 'next/server';

async function connectToDatabase() {
    await dbConnect();
}

export async function POST(request) {
    await connectToDatabase();

    const { email, progresso } = await request.json();

    try {
        // Salvar ou atualizar o progresso do usuário no banco de dados
        await User.updateOne(
            { email },
            { $set: { progresso } },
            { upsert: true } // Cria um novo documento se não existir
        );

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Erro ao salvar progresso:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

export async function GET(request) {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    try {
        const user = await User.findOne({ email });
        
        if (!user || !user.progresso) {
            return NextResponse.json({ progresso: [] }, { status: 200 });
        }

        return NextResponse.json({ progresso: user.progresso }, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar progresso:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}