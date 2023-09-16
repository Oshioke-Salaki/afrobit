import rightArrow from "../assets/arrow-right.svg";
function HeroSection() {
  return (
    <div className="pb-[134px] pl-[172px] pr-[152px] pt-[106px]">
      <h1 className="text-primaryDark mb-10 text-center text-[78px] font-semibold">
        Empowering Africa&apos;s Future Unlocking Bitcoin&apos;s Potential, One
        Course at a Time
      </h1>
      <button className="border-primaryColor flex justify-center gap-x-10 rounded-[50px] border-[1.5px] border-solid py-5">
        Get started <img src={rightArrow} alt="" />
      </button>
    </div>
  );
}

export default HeroSection;
