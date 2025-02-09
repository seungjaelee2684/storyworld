import { Search } from "lucide-react";
import { SearchIcon, SearchInput, SearchInputContainer } from "./style";

interface SearchBarProps {
  fullWidth?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  autoComplete?: string;
  onChange?: (e: any) => void;
  onSubmit?: (e: any) => void;
};

const SearchBar = ({
  fullWidth = false,
  placeholder = 'Enter Search Word',
  type = 'search',
  name,
  value,
  autoComplete = 'off',
  onChange,
  onSubmit
}: SearchBarProps) => {
  return (
    <SearchInputContainer
      onSubmit={onSubmit}
      $full={fullWidth}>
      <SearchIcon type='submit'>
        <Search size={24} />
      </SearchIcon>
      <SearchInput
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange} />
    </SearchInputContainer>
  )
};

export default SearchBar;