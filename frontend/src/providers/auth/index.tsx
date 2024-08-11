import { SessionProvider } from 'next-auth/react';
import type { AuthProviderProps } from './types';

export function AuthProvider(props: AuthProviderProps): JSX.Element {
    const { children, session } = props;

    return <SessionProvider session={session}>{children}</SessionProvider>;
}
