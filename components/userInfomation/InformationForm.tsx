import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { userInfoUpdate } from '../../pages/api/userInfo';
import { UserPageProps } from './informationType';
import ReviewerRegisterModal from './ReviewerRegisterModal';
import UserInput from './UserInput';

const InformationForm = ({ data }: UserPageProps) => {
  const [userId, setUserId] = useState<string>(data.userInfo.username);
  const [email, setEmail] = useState<string>(data.userInfo.email);
  const [profileUrl, setProfileUrl] = useState<string>(data.userInfo.profileUrl);
  const [modal, setModal] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const userUpdateHandler = async () => {
    setUpdateLoading((prev) => !prev);
    try {
      await userInfoUpdate({ username: userId, email });
      setUpdateLoading(false);
      toast.success('데이터가 업데이트 되었습니다.');
    } catch (err) {
      setUpdateLoading(false);
      toast.error('데이터 업데이트가 진행되지 않았습니다. 다시 진행해 주시기 바랍니다.');
    }
  };

  // 추후 로딩 컴포넌트를 사용할 예정
  if (updateLoading) {
    return <div>Loading...</div>;
  }

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
            <UserInput name="Github Url" input={profileUrl} setInput={setProfileUrl} />
          </>
        ) : (
          <>
            <UserInput name="활동명" input={userId} setInput={setUserId} />
            <UserInput name="이메일" input={email} setInput={setEmail} />
            <UserInput name="Github Url" input={profileUrl} setInput={setProfileUrl} />
          </>
        )}
      </div>
      <div className="mt-8 flex gap-2">
        <button
          onClick={() => {
            if (modify) {
              setModify((prev) => !prev);
              userUpdateHandler();
            } else {
              setModify((prev) => !prev);
            }
          }}
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
