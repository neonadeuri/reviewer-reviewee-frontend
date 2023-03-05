import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { userGet, userInfoUpdate } from '../../pages/api/userInfo';
import { IUserGetType, IUserUpdateType, UserPageProps } from './informationType';
import ReviewerRegisterModal from './ReviewerRegisterModal';
import UserInput from './UserInput';

const InformationForm = ({ data }: UserPageProps) => {
  // User Information Form
  const [userId, setUserId] = useState<string>(data.userInfo.username);
  const [email, setEmail] = useState<string>(data.userInfo.email);
  const [githubUrl, setGithubUrl] = useState<string>(data.userInfo.githubURL);
  const route = useRouter();
  const query = route.query as { userId: string };
  const [modal, setModal] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: (userData: IUserUpdateType) => {
      return userInfoUpdate(userData);
    },
    onSuccess: () => {
      userGet(query.userId).then((res: { data: IUserGetType }) => {
        const userData = res.data.userInfo;
        setUserId(userData.username);
        setEmail(userData.email);
      });
    },
    onError: () => {
      setUserId(data.userInfo.username);
      setEmail(data.userInfo.email);
      alert('업데이트 중 오류가 발생했습니다. 다시 진행해 주시기 바랍니다.');
    },
  });

  const userUpdate = () => {
    mutate({ username: userId, email });
  };

  if (isLoading) {
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
            <UserInput name="Github Url" input={githubUrl} setInput={setGithubUrl} />
          </>
        ) : (
          <>
            <UserInput name="활동명" input={userId} setInput={setUserId} />
            <UserInput name="이메일" input={email} setInput={setEmail} />
            <UserInput name="Github Url" input={githubUrl} setInput={setGithubUrl} />
          </>
        )}
      </div>
      <div className="mt-8 flex gap-2">
        <button
          onClick={() => {
            if (modify) {
              setModify((prev) => !prev);
              userUpdate();
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
      {modal && (
        <ReviewerRegisterModal
          setModal={setModal}
          data={{ register: data.register, registerOption: data.registerOption }}
        />
      )}
    </div>
  );
};

export default InformationForm;
