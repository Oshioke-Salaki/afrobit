import rightArrow from "../assets/arrow-right.svg";
function HeroSection() {
  return (
    <div className="flex flex-col items-center pb-[134px] pl-[150px] pr-[150px] pt-[106px]">
      <h1 className="text-primaryDark mb-10 text-center text-[78px] font-semibold">
        Empowering Africa&apos;s Future Unlocking Bitcoin&apos;s Potential, One
        Course at a Time
      </h1>
      <button className="border-primaryColor text-secondaryDark flex items-center justify-center gap-x-10 rounded-[50px] border-[1.5px] border-solid px-[43.5px] py-5 text-base font-[500]">
        Get started <img src={rightArrow} alt="" />
      </button>
    </div>
  );
}

export default HeroSection;
