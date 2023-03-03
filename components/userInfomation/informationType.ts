export interface IRegisterInputType {
  name: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disable?: boolean;
}

export interface IModalPropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface IReviewerRegisterType {
  job: string;
  career: string;
  techStack: number[];
  introduction: string;
}
