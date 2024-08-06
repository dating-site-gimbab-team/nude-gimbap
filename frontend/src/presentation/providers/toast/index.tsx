import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { ToastProviderProps } from './types';

export function ToastProvider(props: ToastProviderProps): JSX.Element {
    const { children } = props;
    const router = useRouter();

    return (
        <>
            {children}
            <ToastContainer
                position="bottom-right"
                hideProgressBar
                newestOnTop
                rtl={false}
                autoClose={2 * 1000}
                closeButton={false}
                toastStyle={{
                    // marginBottom:
                    //     router.pathname === '/user' ||
                    //     router.pathname === '/login'
                    //         ? 0
                    //         : 18,
                    backgroundColor: 'white',
                    color: '#343A3F',
                    borderRadius: 10,
                    boxShadow: 'none',
                }}
            />
        </>
    );
}