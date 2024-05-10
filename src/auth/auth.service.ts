import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsuariosService,
        private jwtService: JwtService
    ) { }

    async signIn(usernameOrEmail: string, password: string): Promise<{ acces_token: string }> {
        const user = await this.usersService.findEmailOrUsername(usernameOrEmail, password)
        if (user.verifyPassword(password)) {
            throw new UnauthorizedException()
        }
        const payload = { sub: user.email, username: user.username }
        return {
            acces_token: await this.jwtService.signAsync(payload)
        }
    }
}
