import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { HeaderContainer } from './styles';

export function Header(): JSX.Element {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {}, [session]);

    if (!session) {
        return <HeaderContainer />;
    }

    return (
        <HeaderContainer>
            <div className="logo"></div>
            <div className="nav">
                <Link
                    href="/"
                    className={router.pathname === '/' ? 'active' : ''}
                >
                    검색
                </Link>
                <Link
                    href="/product"
                    className={router.pathname === '/product' ? 'active' : ''}
                >
                    상품 관리
                </Link>
                <Link
                    href="/agent"
                    className={router.pathname === '/agent' ? 'active' : ''}
                >
                    에이전트 관리
                </Link>
                <a
                    onClick={() =>
                        signOut({ callbackUrl: '/login', redirect: true })
                    }
                >
                    로그아웃
                </a>
            </div>
        </HeaderContainer>
    );
}
