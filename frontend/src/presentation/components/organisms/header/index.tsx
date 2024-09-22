import { signOut, useSession } from 'next-auth/react';
import { HeaderContainer } from './styles';

export function Header(): JSX.Element {
    const { data: session } = useSession();

    if (!session) {
        return <HeaderContainer />;
    }

    return (
        <HeaderContainer>
            <div className="logo"></div>
            <div className="nav">
                <a onClick={() => signOut({ callbackUrl: '/login', redirect: true })}>
                    로그아웃
                </a>
            </div>
        </HeaderContainer>
    );
}
