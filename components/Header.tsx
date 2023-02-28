import Image from 'next/image';
import img from 'styles/images/person.png';

const Header = () => {
  return (
    <div className="w-full sticky mb-3">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between text-4xl">
        <span className="cursor-pointer font-bold">Logo</span>
        <span className="cursor-pointer font-bold">LogIn</span>
      </div>
      <div className="w-full h-80 bg-cyan-200">
        <div className="max-w-7xl h-full flex items-center justify-between mx-auto">
          <Image src={img} alt="person" />
          <div className="w-full text-4xl font-bold leading-10 tracking-widest">
            <div className="w-full flex justify-center items-center flex-col">
              <span>개인 프로젝트의 코드리뷰가</span>
              <br />
              <span>필요하신가요?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
