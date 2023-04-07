import { Request, Response } from 'express';
import fs = require('fs');
import { hashPassword } from '../utils/bcryptUtils'
import * as uuid from 'uuid';
import { User } from 'music-app-models';
import { context } from '../../server';

export const registerUser = async (req: Request, res: Response) => {
    const hashedPassword = await hashPassword(req.body.password)
    const username = req.body.name
    const email = req.body.email
    const password = hashedPassword

    // Valida se o email possui um "@"
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        return res.status(400).send('Email inválido.')
    }

    const newUser: User = {
        email: email,
        nome: username,
        senha: password
    }

    context.userRepository.add(newUser);
}
