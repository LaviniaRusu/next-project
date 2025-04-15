import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center border w-full">
        <input ref={ref} type="text" placeholder="Cauta aici..." />
      </form>
    </div>
  );
};

export default SearchInput;
