import { createPortal } from "react-dom";

const PortalPopUpcontent = ({ copied }) => {
  return createPortal(
    <section>
         {copied && <p>Copied to clipboard</p>} {/* when copied == true prints the message*/}
    </section>,
    document.querySelector("#popup-content")
  )
};

export default PortalPopUpcontent;


/*
Portal allows us to render components to Divs of our liking like the above "Copied to clipbard" message is rendered in popup-content div of index.html file
*/