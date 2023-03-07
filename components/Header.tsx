import Image from 'next/image';
import img from 'styles/images/person.png';
import Link from 'next/link';
import { IAllPagePropsData } from '../globalType';

const Header = ({ image_url, isLogIn }: IAllPagePropsData) => {
  console.log(isLogIn);
  return (
    <div className="w-full sticky mb-3">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between text-4xl">
        <Link href="/">
          <span className="cursor-pointer font-bold">Logo</span>
        </Link>
        {isLogIn === true ? (
          <Link href={'/login'}>
            {/* 정상적으로 로그인이 되어있다면 image_url 이미지를 띄워줄 예정 (next/Image) 로그인시 클릭하여 드롭다운 구현할 예정*/}
            <span className="cursor-pointer font-bold">{image_url}</span>
          </Link>
        ) : (
          <Link href={'/login'}>
            <span className="cursor-pointer font-bold">LogIn</span>
          </Link>
        )}
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
