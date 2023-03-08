import { useState } from 'react';
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
    await userInfoUpdate({ username: userId, email })
      .then(() => {
        setUpdateLoading(false);
        alert('데이터가 업데이트 되었습니다.');
        // 여기서 새로고침을 통한 최신데이터를 가져올지 아니면 그냥 userGet을 사용해서
        // 데이터를 최신 데이터로 업데이트를 해줄지 고민입니다.
      })
      .catch(() => {
        setUpdateLoading(false);
        alert('데이터 업데이트가 진행되지 않았습니다. 다시 진행해 주시기 바랍니다.');
      });
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
