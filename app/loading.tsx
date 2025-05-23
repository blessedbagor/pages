import Image from "next/image";
import loader from '@/assets/loading.gif';

const LoadingPage = () => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }}>
        <Image src={loader} height={100} width={100} alt="Loading..." />
    </div>;
}
 
export default LoadingPage ;