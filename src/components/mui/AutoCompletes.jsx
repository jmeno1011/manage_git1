import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompletes = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setAge(typeof value === "string" ? value.split(",") : value);
  };
  const [value, setValue] = useState(userlist[0]);
  return (
    <div>
      <h3 style={{ height: 30 }}>Autocomplete</h3>
      <hr />
      <Autocomplete
        id="combo-box-demo"
        sx={{ width: 300 }}
        options={userlist}
        autoHighlight
        getOptionLabel={(option) => option.ep}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.ep} : {option.epname}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{ ...params.inputProps }}
            label="Placeholder"
            size={"small"}
          />
        )}
        onChange={(event, newValue) => {
          console.log(newValue?.ep);
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default AutoCompletes;

const userlist = [
  {
    ep: "EP0001",
    epname: "테스트1",
    email: "ep0001@test.com",
  },
  {
    ep: "EP0002",
    epname: "테스트2",
    email: "ep0002@test.com",
  },
  {
    ep: "EP0003",
    epname: "테스트3",
    email: "ep0003@test.com",
  },
  {
    ep: "EP0004",
    epname: "테스트4",
    email: "ep0004@test.com",
  },
  {
    ep: "EP0005",
    epname: "테스트5",
    email: "ep0005@test.com",
  },
  {
    ep: "EP0006",
    epname: "테스트6",
    email: "ep0006@test.com",
  },
  {
    ep: "EP0018",
    epname: "윤윤혁",
    email: "ep0018@test.com",
  },
  {
    ep: "EP0023",
    epname: "홍길동",
    email: "ep0023@test.com",
  },
  {
    ep: "EP0043",
    epname: "임은자",
    email: "ep0043@gmail.com",
  },
  {
    ep: "EP0080",
    epname: "남승재",
    email: "",
  },
  {
    ep: "EP0109",
    epname: "황보효주",
    email: "",
  },
  {
    ep: "EP0182",
    epname: "한희훈",
    email: "",
  },
  {
    ep: "EP0199",
    epname: "안남준",
    email: "",
  },
  {
    ep: "EP0264",
    epname: "전선빈",
    email: "",
  },
  {
    ep: "EP0267",
    epname: "황보경원",
    email: "1122@test.net",
  },
  {
    ep: "EP0306",
    epname: "한효성",
    email: "",
  },
  {
    ep: "EP1031",
    epname: "김철수",
    email: "1111@gmail.com",
  },
  {
    ep: "EP2000",
    epname: "김태수",
    email: "",
  },
  {
    ep: "EP2001",
    epname: "안성진",
    email: "imb07060@gmail.com",
  },
  {
    ep: "EP2002",
    epname: "심민보",
    email: "",
  },
  {
    ep: "EP2003",
    epname: "김도형",
    email: "meno.mik1011@gmail.com",
  },
  {
    ep: "EP2004",
    epname: "정권환",
    email: "",
  },
  {
    ep: "EP2005",
    epname: "전익수",
    email: "",
  },
  {
    ep: "EP2006",
    epname: "윤덕배",
    email: "",
  },
  {
    ep: "EP2007",
    epname: "테스트",
    email: "",
  },
  {
    ep: "EP2008",
    epname: "우울테스트",
    email: "",
  },
  {
    ep: "EP2009",
    epname: "김태수1",
    email: "",
  },
  {
    ep: "EP2010",
    epname: "김태수2",
    email: "",
  },
  {
    ep: "EP2011",
    epname: "김태수A",
    email: "",
  },
  {
    ep: "EP2013",
    epname: "브라이언",
    email: "1111@test.net",
  },
  {
    ep: "EP9991",
    epname: "김민재",
    email: "positive@test.net",
  },
  {
    ep: "EP9992",
    epname: "박민수",
    email: "negative@test.net",
  },
];
