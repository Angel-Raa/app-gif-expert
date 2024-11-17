import { useState } from "react";

interface Props {
 onCategoryInput: (input: string) => void;
}
export const CategoryForm = ({onCategoryInput}:Props):React.JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    setInputValue("");
    onCategoryInput(inputValue)
  };

  return (
    <form onSubmit={onSubmit} >
      <input
      className="form-input"
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  );
};
