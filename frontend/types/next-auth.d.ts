import 'next-auth/jwt';
import { type DefaultSession } from 'next-auth';

declare module 'next-auth/jwt' {
    interface JWT {
        error?: string;
        access_token: string;
    }
}

declare module 'next-auth' {
    interface Session extends DefaultSession {
        access_token: string;
        error?: string;
    }
}