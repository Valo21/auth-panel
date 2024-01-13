'use server'

import { prisma } from "@src/prisma.client";
import bcrypt from 'bcrypt'

export async function authRegister(formData: FormData) {
    const data = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        password: formData.get('password')
    }

    if (data.password !== formData.get('rpassword')){
        return false;
    }

    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email: data.email as string
            }
        })
        if (userExists) {
            throw {
                message: 'Email already in use'
            } 
        }
        const user = await prisma.user.create({
            data: {
                name: data.name as string,
                surname: data.surname as string,
                email: data.email as string,
                password: bcrypt.hashSync(data.password as string, 10)
            }
        });

        return {id: user.id};
    } catch (error) {
        return error
    }
}