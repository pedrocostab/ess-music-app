import { Router } from 'express'
const router: Router = Router()

import getJsonDatabase from './utils/jsonDatabase'
import { hashPassword, comparePasswords } from './utils/bcryptUtils'

import { logout } from './controllers/logout';
import { loginUser } from './controllers/loginUser';
import { registerUser } from './controllers/registerUser';
import { registerAdmin } from './controllers/registerAdmin';

import { dashboardRoute } from './views/dashboard';
import { authenticationMiddleware } from './middlewares/authenticationMw'
import { authorizationMiddleware } from './middlewares/authorizationMw'

import { Request, Response } from 'express';
import fs = require('fs');
import bcrypt = require('bcrypt');
import uuid = require('uuid');
import jwt = require('jsonwebtoken');
import { JwtPayload } from 'jsonwebtoken'
interface User {
    id: string
    role: string
    name: string
    email: string
    password: string
}

interface JwtClaims {
    _id: string
}


router.post('/user', registerUser)

router.post('/login', loginUser)

router.get('/dashboardUser', authenticationMiddleware, dashboardRoute)

router.post('/registerAdmin', registerAdmin)

router.get('/dashboardAdmin', authenticationMiddleware, authorizationMiddleware, dashboardRoute)

router.post('/logout', authenticationMiddleware, logout)

export default router