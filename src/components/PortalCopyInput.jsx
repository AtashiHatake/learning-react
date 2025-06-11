

import { useState } from "react";
import PortalPopUpcontent from "./PortalPopUpcontent";

const PortalCopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    })
  };

  return (
    <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
        <PortalPopUpcontent copied={copied}/>
    </div>
  )
}

export default PortalCopyInput;