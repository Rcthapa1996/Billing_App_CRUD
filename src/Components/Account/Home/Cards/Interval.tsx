import { nepaliAmountFormat, englishNumberFormat } from "nepali-number";

const Interval = ({ interval }) => {
  const { years, months, days } = interval;
  const totalDays = years * 365 + months * 30 + days;
  return (
    <div>
      {totalDays >= 2 ? (
        <>
          <div>
            {years ? englishNumberFormat(years, "ne") + " वर्ष " : null}
          </div>
          <div>
            {months ? englishNumberFormat(months, "ne") + " महिना " : null}
          </div>
          <div>
            {days || (years === 0 && months === 0 && days === 0)
              ? englishNumberFormat(days, "ne") + " दिन"
              : null}
          </div>
        </>
      ) : (
        <>
          <div>{totalDays === 0 && "आज"}</div>
          <div>{totalDays === 1 && "हिजो"}</div>
        </>
      )}
    </div>
  );
};

export default Interval;
