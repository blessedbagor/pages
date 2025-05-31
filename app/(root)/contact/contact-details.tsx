import { HoverEffect } from "@/components/ui/card-hover-effect";


export function ContactDetails() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Address",
    description:
      "Unit 2F-9, The Galleria, Pacencia Tijam Pison Avenue, San Rafael, Mandurriao, Iloilo City",
    link: "https://maps.app.goo.gl/2x1TdCPWv3fWCmMC7",
  },
  {
    title: "Email Us",
    description:
      "care@igift.com.ph",
    link: "mailto:care.igift.com.ph",
  },
  {
    title: "Call Us",
    description:
      "(+63) 962 778 3140",
    link: "tel:+639627783140",
  },
  {
    title: "Chat with Us",
    description:
      "m.me/igift.official",
    link: "https://m.me/igift.official",
  },
  {
    title: "Join our Community",
    description:
      "connect.igift.com.ph",
    link: "https://connect.igift.com.ph/community",
  },
  {
    title: "Submit Ticket",
    description:
      "connect.igift.com.ph/portal",
    link: "https://connect.igift.com.ph/portal",
  },
];
