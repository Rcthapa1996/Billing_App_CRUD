// Styles
import TransactionTableConfig from "../../../../shared/transactionDetails";
import Table from "../../../../shared/Table";
import { nepaliAmountFormat } from "nepali-number";
import { FaPhoneAlt } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Styles from "./CardStyles.module.scss";
import { nepaliDateInWord } from "../../../../Utills/dateConvert";

// Components
import CardWrapper from "./CardWrapper";
import Interval from "./Interval";

const Card = ({
  data: { contact, name, address, transactionDetails, summary }
}) => {
  const {
    interval,
    totalAmount,
    totalIntrest,
    principal,
    rate,
    from: { bs: dateOfIssue }
  } = summary;

  return (
    <>
      <CardWrapper>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content">
            <div className={Styles["container"]}>
              <div className={Styles["info"]}>
                <div className={Styles["items"]}>
                  <div>{name.np}</div>
                  {contact && (
                    <a href={`tel:${contact}`}>
                      <div className={Styles["items"]}>
                        <FaPhoneAlt />
                      </div>
                    </a>
                  )}
                </div>
                <div className={Styles["items"]}>
                  <div>{nepaliDateInWord(dateOfIssue)}</div>
                </div>
                <div className={Styles["items"]}>
                  <div>{address.np}</div>
                </div>
              </div>

              <div className={Styles["interval"]}>
                <Interval interval={interval} />
              </div>

              <div className={Styles["data"]}>
                <div className={Styles["items"]}>
                  <div>{"रकम: "}</div>
                  <div>{nepaliAmountFormat(principal, 0, "ne")}</div>
                </div>
                <div className={Styles["items"]}>
                  <div>{"दर: "}</div>
                  <div>{nepaliAmountFormat(rate, 0, "ne")}</div>
                </div>
                <div className={Styles["items"]}>
                  <div>{"ब्याज: "}</div>
                  <div>{nepaliAmountFormat(totalIntrest, 0, "ne")}</div>
                </div>
                <div className={Styles["items"]}>
                  <div>{"कुल रकम: "}</div>
                  <div>{nepaliAmountFormat(totalAmount, 0, "ne")}</div>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={Styles["cardDetails"]}>
              <div className={Styles["tableContainer"]}>
                <Table
                  data={transactionDetails || []}
                  config={TransactionTableConfig}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </CardWrapper>
    </>
  );
};
export default Card;
