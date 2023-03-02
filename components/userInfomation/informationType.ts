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

export type data = string;

export interface IReviewerDropDownPropsType {
  name: string;
  dropList: string[];
  type: string | string[];
  ment: string;
}

export interface IReviewerRegisterType {
  position: string;
  career: string;
  skill: string[];
  introduce: string;
}
