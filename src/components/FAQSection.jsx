import React from "react";
import ContactForm from "./ContactForm";
import FAQs from "./FAQs";

const FAQSection = () => {
  return (
    <div className="container  content-space-t-lg-2 content-space-b-2">
      <div className="row">
        <FAQs />
        <ContactForm />
      </div>
    </div>
  );
};

export default FAQSection;
