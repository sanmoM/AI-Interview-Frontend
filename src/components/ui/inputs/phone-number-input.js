import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import IMask from "imask";

import "intl-tel-input/build/css/intlTelInput.css";

const PhoneNumberInput = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    // Initialize intl-tel-input
    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "auto",
      preferredCountries: ["kz", "ru"],
      autoInsertDialCode: true,
      geoIpLookup: (callback) => {
        fetch("https://ipapi.co/json")
          .then((res) => res.json())
          .then((data) => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",
    });

    // Initialize mask
    const mask = IMask(phoneRef.current, {
      mask: "+{7}(000)000-00-00",
    });

    // Cleanup on unmount
    return () => {
      iti.destroy();
      mask.destroy();
    };
  }, []);

  return (
    <div>
      <style>{`
        .iti__arrow{
            display: none;
        }

        :root {
            --iti-flag-width: 38px;
            --iti-flag-height: 24px;
            --iti-flag-sprite-height: 24px;
            // --iti-flag-sprite-width: 9191px;
        }
      `}</style>
      <input
        ref={phoneRef}
        id="phone"
        className="form-control"
        type="tel"
        name="phone"
        inputMode="tel"
      />
    </div>
  );
};

export default PhoneNumberInput;
