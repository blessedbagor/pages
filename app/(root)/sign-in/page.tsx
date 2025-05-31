import { SignInHeroSection } from "./sign-in-hero";
import { SignInList } from "./signin-list";

const SignInPage = () => {
    return ( 
    <>
    <SignInHeroSection/>
    <div className="max-w-7xl mx-auto py-8 mb-40">
    <SignInList />
    </div>
    
    </> 
    );
}
 
export default SignInPage;