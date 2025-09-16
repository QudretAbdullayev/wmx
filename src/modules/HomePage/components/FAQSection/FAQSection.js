import ComponentTitle from '@/components/ComponentTitle/ComponentTitle'
import styles from './FAQSection.module.scss'
import FAQ from '@/components/FAQ/FAQ'

const FAQSection = () => {
  const faqData = [
    {
      question: "Do you provide certificates?",
      answer: "Some sessions are live, while others are available as pre-recorded videos you can watch anytime. Yes, all our bootcamps are fully online and conducted via Zoom."
    },
    {
      question: "Does Untitled UI include the new Figma features?",
      answer: "Yes, Untitled UI is regularly updated to include the latest Figma features and components to keep your design system current."
    },
    {
      question: "Is there a dark mode version of the kit?",
      answer: "Yes, the kit includes both light and dark mode versions of all components for comprehensive design coverage."
    },
    {
      question: "What does \"lifetime access\" mean?",
      answer: "Lifetime access means you get permanent access to the current version and all future updates without any additional fees."
    },
    {
      question: "How do I access updates after purchasing?",
      answer: "You'll receive email notifications about updates and can download the latest version from your account dashboard at any time."
    }
  ];
  return (
    <section className='g-container mb'>
        <ComponentTitle title="Frequently Asked Questions" />
        <div className="ml">
            <FAQ faqData={faqData}/>
        </div>
    </section>
  )
}

export default FAQSection;
