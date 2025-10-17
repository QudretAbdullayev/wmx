"use client";
import ContactForm from "./containers/ContactForm/ContactForm";
import FAQ from "./containers/FAQ/FAQ";
import ContactUs from "./containers/ContactUs/ContactUs";
import Hero from "./containers/Hero/Hero";
import Map from "./containers/Map/Map";

const ContactUsPage = ({data}) => {

  return (
    <>
      <Hero left={data[0].left_title} right={data[0].right_title} banner={data[0].image} title={data[0].title}/>
      <ContactForm data={data[0].contact_form_fields[0]} subjects={data[0].contact_form_subjects}/>
      <ContactUs data={data[0].contact_information[0]} />
      <Map title={data[0].map_section_title} />
      <FAQ data={data[0].contact_faqs} title={data[0].faq_section_title} />
      
    </>
  )
}

export default ContactUsPage;
