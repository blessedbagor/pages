
import { HeroSection } from '@/components/shared/home/hero-section';
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
    <div className='w-full mx-auto px-12 dark:bg-black antialiased dark:bg-grid-white/[0.03] overflow-hidden space-y-8 pt-4'>
    {/* <Benefits />
    <ProblemSection />
    <ProblemAgitateSection />
    <SolutionSection />
    <SocialProofSection />
    <CompanySection />
    <FeaturesSection />
    <PackageSection />
    <DealCountdown /> */}
    <div className='max-w-5xl text-6xl font-bold mx-auto text-center mt-40'>Frequently Asked Questions</div>
    {/* <FrequentlyAskedQuestions />
    <HoverBottomSection /> */}
     </div>
    </> 
    );
  }
   
  export default Homepage;