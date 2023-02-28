import { useState } from 'react';
import RegisterInput from './RegisterInput';

const RegisterForm = () => {
  // User Register Info
  const [userId, setUserId] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled((prev) => !prev);
  };
  return (
    <form onSubmit={registerSubmit}>
      <div>
        <RegisterInput name="활동명" input={userId} setInput={setUserId} placeholder="활동명을 입력해주세요." />
        <RegisterInput name="직무" input={position} setInput={setPosition} placeholder="직무를 입력해주세요." />
        <RegisterInput name="경력" input={career} setInput={setCareer} placeholder="경력을 입력해주세요." />
        <RegisterInput
          name="기술 스택"
          input={skill}
          setInput={setSkill}
          placeholder="리뷰 가능한 기술을 입력해주세요."
        />
        <RegisterInput name="Github URL" input={url} setInput={setUrl} placeholder="깃허브 주소를 입력해주세요." />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="w-full flex justify-center items-center disabled:opacity-40 bg-black text-white h-10 rounded-md"
          disabled={disabled}>
          리뷰어 등록
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
