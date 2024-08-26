import { Loader } from '@presentation/components/atoms/loader';
import { useSession, signIn } from 'next-auth/react';
import { Container, LoginBox, TitleText, LoginFormContainer } from './styles';
import { useCallback, ChangeEvent } from 'react';
import { useToast } from '@application/hooks/common/toast';
import { useNextRouter } from '@application/hooks/common/router';
import { useLoginStore } from '@application/store/login';


export function Login(): JSX.Element {
    const { status } = useSession();
    const router = useNextRouter();
    const { showSuccess, showError } = useToast();
    const { username, password, setUsername, setPassword } = useLoginStore();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('domain-login', {
            username: username,
            password: password,
            redirect: false,
        });

        // 에러 핸들링
        if (res && res.status === 200) {
            showSuccess('로그인 완료');
            router.replace('/');
        } else if (res && res.error && res.status === 401) {
            showError(res.error);
        }
    };

    const onClickGithub: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        const res = await signIn('github');

        // 에러 핸들링
        if (res && res.status === 200) {
            showSuccess('로그인 완료');
            router.replace('/');
        } else if (res && res.error && res.status === 401) {
            showError(res.error);
        }
    };

    const onInputChangeForUsername = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            setUsername(e.target.value);
        },
        [setUsername]
    );

    const onInputChangeForPassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => {
            setPassword(e.target.value);
        },
        [setPassword]
    );

    if (status === 'loading') {
        return <Loader />;
    }

    return (
        <Container>
            <LoginBox>
                <TitleText>환영합니다.</TitleText>
                <LoginFormContainer>
                    <form onSubmit={handleSubmit} autoComplete="on">
                        <input
                            placeholder="아이디"
                            type="text"
                            value={username}
                            onChange={onInputChangeForUsername}
                            autoComplete={'username'}
                        />
                        <input
                            placeholder="비밀번호"
                            type="password"
                            value={password}
                            onChange={onInputChangeForPassword}
                            autoComplete={'current-password'}
                        />
                        <button type="submit">로그인</button>
                    </form>
                    <button type="button" onClick={onClickGithub}>Github</button>
                </LoginFormContainer>
            </LoginBox>
        </Container>
    );
}
