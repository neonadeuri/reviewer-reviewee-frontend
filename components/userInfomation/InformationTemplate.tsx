import InformationForm from './InformationForm';

const InformationTemplate = () => {
  return (
    <div className="h-full w-full max-w-md">
      <h2 className="text-center text-3xl">계정 정보</h2>
      <InformationForm />
    </div>
  );
};

export default InformationTemplate;
