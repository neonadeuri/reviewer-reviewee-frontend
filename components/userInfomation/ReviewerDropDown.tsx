import clsx from 'clsx';
import { useState } from 'react';
import { IReviewerDropDownPropsType } from './informationType';

function ReviewerDropDown({ name, dropList, ment, type }: IReviewerDropDownPropsType) {
  const [select, setSelect] = useState<string | string[]>(type);
  const [drop, setDrop] = useState<boolean>(false);

  // array 타입가드 함수
  const isArray = (types: string | string[]): types is string[] => {
    return Array.isArray(types);
  };
  // string 타입가드 함수
  const isString = (types: string | string[]): types is string => {
    return types.length > 0 && typeof types === 'string';
  };

  return (
    <div className="mt-6">
      <span className="w-full flex flex-col items-start cursor-default">{name}</span>
      <div
        id="select"
        onClick={() => setDrop((prev) => !prev)}
        className={clsx('p-2 h-10 w-full border-solid border-2 rounded-md cursor-pointer text-[#a9a9a9]', {
          ['text-black']: isString(select),
        })}>
        {isString(select) ? select : ment}
      </div>
      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-md mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: drop,
            ['animate-up-animation']: !drop,
          })}>
          {dropList.map((el) => {
            return (
              <li
                className="p-2 cursor-pointer hover:bg-slate-100"
                onClick={() => {
                  setDrop(false);
                  if (isArray(select)) {
                    setSelect((prev) => [...prev, el]);
                  } else {
                    setSelect(el);
                  }
                }}
                key={el}>
                {el}
              </li>
            );
          })}
        </ul>
      )}
      {isArray(select) && select.length > 0 && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-md mt-2.5">
          {select.map((el) => {
            return (
              <span className="border-2 rounded-sm mr-3 cursor-pointer" key={el}>
                {el}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ReviewerDropDown;
