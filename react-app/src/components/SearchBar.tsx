import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function SearchBar({ value, setValue }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label>
      검색
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}

export default SearchBar;
