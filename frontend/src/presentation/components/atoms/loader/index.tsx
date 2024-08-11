import { Loading, LoadingContainer } from './styles';
import { Session } from 'next-auth';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useNextRouter } from '@application/hooks/common/router';

export function Loader(): JSX.Element {
    const router = useNextRouter();
    const { status, data: session } = useSession();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const authHandler = async (session: Session) => {
        const res = await signIn('domain-login', {
            accessToken: session.access_token,
            refreshToken: session.refresh_token,
            redirect: false,
        });
        if (res?.status === 200) {
            router.reload();
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (status !== 'loading' && session?.error === 'AccessTokenError') {
            authHandler(session);
        } else if (session === null) {
            signOut({ callbackUrl: '/login' });
        } else {
            setIsLoading(false);
        }
    }, [status]);

    if (isLoading) {
        return (
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        );
    }

    return (
        <LoadingContainer>
            <Loading />
        </LoadingContainer>
    );
}
