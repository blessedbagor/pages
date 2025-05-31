import { SignUpHeroSection } from "./sign-up-hero";
import { SignUpList } from "./signup-list";


const SignUpPage = () => {
    return ( 
    <>
    <SignUpHeroSection />
    <div className="max-w-7xl mx-auto py-8 mb-40">
    <SignUpList />
    </div>
    </> 
    );
}
 
export default SignUpPage;