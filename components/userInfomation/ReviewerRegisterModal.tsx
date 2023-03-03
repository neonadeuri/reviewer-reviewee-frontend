import { useEffect, useRef, useState } from 'react';
import { IModalPropsType, IReviewerRegisterType, ISkillType } from './informationType';
import ReviewerDropDown from './ReviewerDropDown';

const positionDummy = ['프론트엔드', '백엔드', '모바일', '기타'];
const careerDummy = ['신입(1년이하)', '주니어(1~3년)', '미들(4~8년)', '시니어(9년이상)'];
const skillDummy = [
  { id: 1, skill: 'React' },
  { id: 2, skill: 'SpringBoot' },
  { id: 3, skill: 'Spring' },
  { id: 4, skill: 'View' },
];

function ReviewerRegisterModal({ setModal }: IModalPropsType) {
  // 추후 react-query 로 데이터 가져온 후 사용 예정
  // const [position, setPosition] = useState<string[]>(positionDummy);
  // const [career, setCareer] = useState<string[]>(careerDummy);
  // const [skill, setSkill] = useState<string[]>(skillDummy);
  const modalRef = useRef<HTMLDivElement>(null);
  const [job, setJob] = useState<string>('');
  const [etc, setEtc] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [techStack, setTechStack] = useState<ISkillType[]>([]);
  const [introduction, setIntroduce] = useState<string>('');

  useEffect(() => {
    const handler = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  // reviewer 등록 함수
  const reviewerSubmit = () => {
    const register: IReviewerRegisterType = {
      job: etc ? etc : job,
      career: career,
      techStack: techStack.map((el) => el.id),
      introduction: introduction,
    };
    setModal(false);
    console.log(register);
  };

  const checkValidation = (): boolean => {
    if (job && career && techStack && introduction) {
      return true;
    } else {
      alert('전부 필수 내용입니다.');
      return false;
    }
  };

  return (
    <div>
      <div className="absolute inset-0 bg-[#0b131e5e]"></div>
      <div
        ref={modalRef}
        className="absolute w-[32rem] h-[38rem] border-solid border-2 rounded-md z-50 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-white msm:w-11/12">
        <div className="w-full h-full p-7 flex flex-col">
          <div className="text-center text-2xl">리뷰어 등록</div>
          <div className="overflow-y-auto flex flex-col h-full">
            <ReviewerDropDown
              select={job}
              setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setJob(value as string)}
              name="직무"
              dropList={positionDummy}
              etc={etc}
              setEtc={setEtc}
              ment="직무를 선택해주세요"
            />
            <ReviewerDropDown
              select={career}
              setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setCareer(value as string)}
              name="경력"
              dropList={careerDummy}
              ment="경력을 선택해주세요"
            />
            <ReviewerDropDown
              select={techStack}
              setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setTechStack(value as ISkillType[])}
              name="기술 스택"
              dropList={skillDummy}
              ment="스킬을 선택해주세요"
            />
            <div className="mt-6">
              <span className="w-full flex flex-col items-start">소개글</span>
              <textarea
                className="p-2 w-full h-20 border-solid border-2 rounded-md outline-none"
                value={introduction}
                onChange={(e) => setIntroduce(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="text-center flex justify-center">
            <button
              className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md"
              onClick={() => checkValidation() && reviewerSubmit()}>
              {/* 추후 정보가 있는지 없는지 여부에 따른 멘트 변경 */}
              리뷰어 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewerRegisterModal;
