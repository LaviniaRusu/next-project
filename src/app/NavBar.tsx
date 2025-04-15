import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="center">
      <SearchInput onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
