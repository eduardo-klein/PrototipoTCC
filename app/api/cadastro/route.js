import { NextResponse } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import bcrypt from 'bcrypt';
import User from '../../models/user'; // Importar o modelo User

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  try {
    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'Email já cadastrado.' }, { status: 400 });
    }

    // Criptografar a senha
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Criar o novo usuário com o campo progresso vazio
    const userData = new User({
      email,
      password: hashedPassword,
      progresso: [], // Adiciona o campo progresso vazio no momento da criação
    });

    await userData.save(); // Salvar o usuário no MongoDB

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
