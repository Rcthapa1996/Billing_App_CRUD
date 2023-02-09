import { useDispatch } from "react-redux";
import NepaliDate from "nepali-date-converter";
import { DDMMYYYY } from "../../../shared/Constants/DATE_CONSTANTS";
import "nepali-datepicker-reactjs/dist/index.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import Style from "./AddAccount.module.scss";

// Hooks
import { useNavigate } from "react-router-dom";
import {
  // Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from "@mui/material";

const AddAccountRef = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const now = new NepaliDate();

  // const [date, setDate] = useState<string>("");

  const [data, setData] = useState({
    name: "",
    address: "Ambasi",
    principal: "",
    rate: 1,
    dateOfIssue: now.format(DDMMYYYY),
    totalIntrest: 0,
    totalAmount: 0
  });
  now.setMonth(4);
  // console.log("now", now);

  function handleChange(event, isCalender = false) {
    console.log(event, isCalender);

    // if (isCalender === true) {
    //   console.log(event, isCalender);
    //   setData({ ...data, dateOfIssue: event });
    //   // return;
    // } else {
    //   const { value, name } = event.target;
    //   console.log(event.target.name, ":", event.target.value);
    //   setData({ ...data, [name]: value });
    // }
  }
  function handleSubmit(event) {
    console.log("Your favorite flavor is: " + data.name);
    // console.log(event);
    // console.log("Clicked");

    // createAccount(data)(dispatch);
    event.preventDefault();
    // navigator("/");
  }

  return (
    <>
      <div className={Style["container"]}>
        <select
          name="address"
          // onChange={(e) => {
          //   handleChange({ value: e.target.value, name: e.target.name });
          // }}
        >
          {nameList.map((name) => (
            <option value={name.value}>{name.label}</option>
          ))}
        </select>
        <FormControl onSubmit={handleSubmit} fullWidth>
          <Grid container spacing={5}>
            <TextField
              id="outlined-basi"
              name={"name"}
              value={data.name}
              onChange={handleChange}
              label="नाम"
              variant="outlined"
            />
            <TextField
              id="outlined-basi"
              name={"principal"}
              value={data.principal}
              type="number"
              onChange={handleChange}
              label="मूल रकम"
              variant="outlined"
            />

            {/* <InputLabel id="demo-simple-select-label">दर</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // name={"rate"}
              value={data.rate}
              label="दर"
              onChange={(val) => console.log(val)}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"1.5"}>1.5</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"2.5"}>2.5</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
            </Select>

            {/* <FormLabel id="demo-row-radio-buttons-group-label">दर</FormLabel>
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="1.5" control={<Radio />} label="1.5" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="2.5" control={<Radio />} label="2.5" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
            </RadioGroup> */}
            {/* <FormLabel id="calander">जारी मिति :</FormLabel>
            <Calendar
              name={"dateOfIssue"}
              value={data.dateOfIssue}
              onChange={({ bsDate }) => {
                console.log(bsDate);
                handleChange(bsDate, true);
              }}
              label="दर"
              theme="deepdark"
            /> */}
            {/* <InputLabel id="demo-simple-select-label2">Address</InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              // name={"rate"}
              name={"address"}
              value={data.address}
              label="Address"
              onChange={(data) => {
                // handleChange(data);
                console.log(data);
              }}
              // value={data.rate}
              // label="दर"
              // onChange={handleChange}
            >
              <MenuItem value={"Fattepur"}>Fattepur</MenuItem>
              <MenuItem value={"Ambasi"}>Ambasi</MenuItem>
              <MenuItem value={"Kali Khola"}>Kali Khola</MenuItem>
            </Select> */}

            <Grid container xs={12} md={12}>
              <Grid item xs={6} md={6}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
        {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name={"name"}
            value={data.name}
            onChange={handleChange}
            type="text"
          ></input>
        </label>
        <label>
          Principal:
          <input
            name={"principal"}
            value={data.principal}
            onChange={handleChange}
            type="text"
          ></input>
        </label>
        <label>
          Date:
          <input
            name={"dateOfIssue"}
            value={data.dateOfIssue}
            onChange={handleChange}
            type="text"
          ></input>
        </label>
        {/* <label htmlFor="date">Date</label>
        <NepaliDatePicker
          inputClassName="form-control"
          className=""
          value={date}
          onChange={(value: string) => setDate(value)}
          options={{ calenderLocale: "ne", valueLocale: "en" }}
        /> 
        <label>
          Address:
          <select name={"address"} value={data.address} onChange={handleChange}>
            <option value="Fattepur">Fattepur</option>
            <option value="Ambasi">Ambasi</option>
            <option value="Sakhubani">Sakhubani</option>
            <option value="Kali Khola">Kali Khola</option>
          </select>
        </label>
        <label>
          Rate:
          <select name={"rate"} value={data.rate} onChange={handleChange}>
            <option value="2">2</option>
            <option value="1.5">1.5</option>
            <option value="1">1</option>
          </select>
        </label>
        <input type="submit" value="Add" />
      </form> */}
      </div>
    </>
  );
};

export default AddAccountRef;
