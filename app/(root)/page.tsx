
import DealCountdown from '@/components/deal-countdown';
import { CompanySection } from '@/components/shared/home/company-section';
import FeaturesSection from '@/components/shared/home/features-section';
import { HeroSection } from '@/components/shared/home/hero-section';
import { HoverBottomSection } from '@/components/shared/home/hover-bottom-section';
import PackageSection from '@/components/shared/home/package-section';
import { ProblemAgitateSection } from '@/components/shared/home/problem-agitate-section';
import { ProblemSection } from '@/components/shared/home/problem-section';
import { SocialProofSection } from '@/components/shared/home/social-proof-section';
import { SolutionSection } from '@/components/shared/home/solution-section';
import { Benefits } from '@/components/shared/home/tangible-benefit-box';
import FrequentlyAskedQuestions from '@/components/shared/sales-page/faqs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'iGift | Your Best Life',
    description: 'We offer premium food supplements, innovative opportunities, and digital solutions to help you live your best life.',
    openGraph: {
      title: 'iGift | Your Best Life',
      description: 'iGift fuels your best life with wellness, income, and digital solutions.', 
      siteName: 'iGift',
      images: [
        {
          url: 'https://igift.ph/images/home.png', 
          width: 1200,
          height: 630,
          alt: 'iGift - Your Best Life',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
  const Homepage = async () => {
    return ( 
    <>
    <HeroSection />
    <div className='w-full mx-auto px-4 lg:px-12 dark:bg-black bg-white antialiased dark:bg-grid-white/[0.03] bg-grid-black/[0.03] overflow-hidden space-y-8 pt-4'>
    <Benefits />
    <ProblemSection />
    <ProblemAgitateSection />
    <SolutionSection />
    <SocialProofSection />
    <CompanySection />
    <FeaturesSection />
    <PackageSection />
    <DealCountdown />
    <div className='max-w-5xl text-7xl lg:text-9xl font-bold mx-auto text-center mt-40'>FAQs</div>
    <FrequentlyAskedQuestions />
    <HoverBottomSection />
     </div>
    </> 
    );
  }
   
  export default Homepage;