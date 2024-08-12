import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { abnoNameList } from "../AbnoData";
import { gameState } from "../App";

export default function ComboBox({ handleGuess = (_: number) => { } }) {
  const [inputValue, setInputValue] = React.useState("");
  const [abnos, setAbnos] = React.useState(abnoNameList);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    switch (gameState) {
      case 0: setDisabled(false);
        break;
      case 1:
      case 2:
        setDisabled(true);
        setAbnos(abnoNameList);
    }
  }, [gameState]);

  function handleChange(value: string | null) {
    if (value && abnoNameList.includes(value)) {
      setAbnos(prevAbnos => prevAbnos.filter(abno => abno !== value));
      handleGuess(abnoNameList.indexOf(value));
    }
  }

  function handleInputChange(input: React.SetStateAction<string>, reason: string) {
    setInputValue(input);
    if (reason === "reset") {
      setInputValue("");
    }
  }

  return (
    <Autocomplete
      id="search-box"
      options={abnos}
      blurOnSelect
      freeSolo
      autoHighlight
      disablePortal
      disableClearable
      size="small"
      disabled={disabled}
      onChange={(_event, value, _reason) => {
        handleChange(value);
      }}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue, reason) => {
        handleInputChange(newInputValue, reason);
      }}
      renderInput={(params) => (
        <TextField {...params}
          disabled={disabled}
          label="Enter abnormality name"
          variant="filled"
        />
      )}
    />
  );
}
