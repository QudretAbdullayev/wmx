"use client";
import ContactForm from "./containers/ContactForm/ContactForm";
import FAQ from "./containers/FAQ/FAQ";
import ContactUs from "./containers/ContactUs/ContactUs";
import Hero from "./containers/Hero/Hero";
import Map from "./containers/Map/Map";

const ContactUsPage = ({data}) => {
  return (
    <>
      <Hero data={data.hero} />
      <ContactForm data={data.contact_form} />
      <ContactUs data={data.contact_us} />
      <Map data={data.map} />
      <FAQ data={data.faq} />
      
    </>
  )
}

export default ContactUsPage;
