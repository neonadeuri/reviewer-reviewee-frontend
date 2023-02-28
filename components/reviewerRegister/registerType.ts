export interface IRegisterInputType {
  name: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}
