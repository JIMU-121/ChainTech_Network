export default function ContactSection({
  image = "src/assets/home.png",
  rightPattern = "src/assets/Frame 36.png",
  leftPattern = "src/assets/Frame 36.png",
}) {
  return (
    <>
      <div className="text-white px-10 py-16 min-h-screen bg-black mt-15">
        <div className="w-full flex justify-center py-20 bg-black">
          <div className="relative w-full h-[180px] bg-[#A87FF3] rounded-[15px]">
            <img
              className="absolute top-[55px] left-0 w-[150px] h-[125px]"
              alt="Frame"
              src="src\assets\Frame 36.png"
            />

            <img
              className="absolute top-0 left-[1120px] w-[150px] h-[125px] rotate-180"
              alt="Frame"
              src="src\assets\Frame 36.png"
            />

            <p className="absolute top-[68px] left-[298px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-[22px] tracking-[-1.10px] leading-[22px]">
              Thanks for visit my website
              <br />
              If you have any questions you can write me to any of my social
              networks, I am sure I will answer you.
            </p>

            <img
              className="absolute top-[-131px] left-[43px] w-[232px] h-[271px]"
              alt="Still life graphic"
              src="src\assets\home.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
