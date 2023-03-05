export interface IRegisterInputType {
  name: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disable?: boolean;
}

export interface IModalPropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: Omit<IUserGetType, 'userInfo'>;
}

export interface ISkillType {
  id: number;
  skill: string;
}

export interface IReviewerDropDownPropsType {
  name: string;
  dropList: string[] | ISkillType[];
  select: string | ISkillType[];
  setSelect: React.Dispatch<React.SetStateAction<string | ISkillType[]>>;
  etc?: string;
  setEtc?: React.Dispatch<React.SetStateAction<string>>;
  ment: string;
}

export interface IReviewerRegisterUpdateType {
  job: string;
  career: string;
  techStack: number[];
  introduction: string;
}

export interface IReviewerRegisterDataType extends Omit<IReviewerRegisterUpdateType, 'techStack'> {
  techStack: ISkillType[];
}

export interface IUserUpdateType {
  username: string;
  email: string;
}

export interface UserType extends IUserUpdateType {
  githubURL: string;
}

export interface IRegisterListOption {
  positionList: string[];
  careerList: string[];
  techList: ISkillType[];
}

export interface IUserGetType {
  userInfo: UserType;
  register: IReviewerRegisterDataType;
  registerOption: IRegisterListOption;
}

export interface UserPageProps {
  data: IUserGetType;
}
