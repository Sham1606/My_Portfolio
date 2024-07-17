const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

  // Additional styles for the Contact component
  formContainer: "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",
  formSection: "flex-[0.75] bg-black-100 p-8 rounded-2xl",
  inputLabel: "flex flex-col",
  inputLabelText: "text-white font-medium mb-4",
  inputField: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
  submitButton: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",
  motionDiv: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",
  contactPopup: "contact-popup",
};

export { styles };
