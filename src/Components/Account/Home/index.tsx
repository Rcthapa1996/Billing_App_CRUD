import { useEffect } from "react";

// Styles
import Style from "./Cards/CardStyles.module.scss";

// Components
import Cards from "./Cards";
import Container from "@mui/material/Container";

// Hooks
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../../actions/account";
import { todayDate } from "../../../Utills/dateConvert";

const Home = () => {
  const { data } = useSelector(
    (state: { accountReducer: any }) => state.accountReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getAccount()(dispatch);
  }, []);

  return (
    <div className={Style["home-container"]}>
      <Container>
        <div>{`Total Cards: ${data.length}`}</div>
        <div>{`आजको मिति: ${todayDate()}`}</div>
        <Cards data={data} />
      </Container>
    </div>
  );
};

export default Home;
