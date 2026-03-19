import Image from "next/image";
import React from "react";

const ContactButton = () => {
  return (
    <a href="https://api.whatsapp.com/send/?phone=573021015931&text&type=phone_number&app_absent=0&utm_source=ig">
      <Image
        src="/wpp.png"
        className="fixed bottom-6 right-6 z-50 cursor-pointer" // ← fixed, not fidex
        alt="wpp logo"
        width={65}
        height={65}
      />
    </a>
  );
};

export default ContactButton;
