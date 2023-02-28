import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import CategoryBox from './CategoryBox';

function Template() {
  const [category, setCategory] = useState<string>('');

  return (
    <div className="w-full h-full max-w-7xl">
      <FilterCategory setCategory={setCategory} />
      <CategoryBox category={category} />
    </div>
  );
}

export default Template;
