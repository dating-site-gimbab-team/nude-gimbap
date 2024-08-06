import { ModalProviderProps } from "./types";

export function ModalProvider(props: ModalProviderProps): JSX.Element {
    const { children } = props;
    return (
        <>
            {children}
            {/* 나머지 모달 컴포넌트 추가 */}
        </>
    )
}