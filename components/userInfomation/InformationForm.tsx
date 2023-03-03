import { useState } from 'react';
import ReviewerRegisterModal from './ReviewerRegisterModal';
import UserInput from './UserInput';

const InformationForm = () => {
  // User Information Form
  const [userId, setUserId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  return (
    <div>
      <div>
        {modify ? (
          <>
            <UserInput
              name="활동명"
              input={userId}
              setInput={setUserId}
              placeholder="활동명을 입력해주세요."
              disable={false}
            />
            <UserInput
              name="이메일"
              input={email}
              setInput={setEmail}
              placeholder="이메일을 입력해주세요."
              disable={false}
            />
            <UserInput name="Github URL" input={url} setInput={setUrl} />
          </>
        ) : (
          <>
            <UserInput name="활동명" input={userId} setInput={setUserId} />
            <UserInput name="이메일" input={email} setInput={setEmail} />
            <UserInput name="Github URL" input={url} setInput={setUrl} />
          </>
        )}
      </div>
      <div className="mt-8 flex gap-2">
        <button
          onClick={() => setModify((prev) => !prev)}
          className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md">
          {modify ? '수정 반영' : '정보 수정'}
        </button>
        <button
          onClick={() => setModal(true)}
          type="submit"
          className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md">
          리뷰어 등록
        </button>
      </div>
      {modal && <ReviewerRegisterModal setModal={setModal} />}
    </div>
  );
};

export default InformationForm;
