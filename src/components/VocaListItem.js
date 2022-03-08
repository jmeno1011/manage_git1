import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./vocaListItem.css";
import axios from "axios";
import { useEffect } from "react";
import vocaData from "../json/toeic_voca_2021.json";

const VocaListItem = () => {
  const navigate = useNavigate();
  //   const { data, loading, error } = useGoogleSheets({
  //     apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //     sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  //   });

  const fetch = async () => {
    try {
      const res = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZGWwvVmCADcl0PANk9FE364lSw1xZIVHkS5QIJIj6SG_VgLdUHsRa4MTmvs5jAMhah7EN9CEh-Jvw/pubhtml"
      );
      //   console.log(res);
      return res;
    } catch {}
  };

  useEffect(() => {
    fetch();
    // console.log(vocaData);
  }, []);

  return (
    <div>
      <header>
        <h1>Voca</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>
      <div
        style={{ height: 500, width: 550, margin: "1rem", overflow: "auto" }}
      >
        <VocaItem />
      </div>
    </div>
  );
};

export default VocaListItem;

const VocaItem = () => {
  return (
    <>
      {vocaData.map((value) => (
        <div style={{ width: 530 }} key={value.index}>
          <div className="vocaItem">
            <div className="itemWord">
              <div className="wrapWord">
                <div>
                  <a target={"_blank"} className="word">
                    {value.words}
                  </a>
                </div>
              </div>
              <div className="wrapBtn">
                <button className="btnListen">
                  <Icon icon="clarity:volume-up-line" />
                </button>
              </div>
            </div>
            <div className="itemMean">
              <div className="contentMean">
                <ul className="listMean">
                  <li className="wrapmean">
                    <div className="meanDesc">
                      <span className="num">{value.index}.</span>
                      <p className="content">{value.means}</p>
                    </div>
                  </li>
                </ul>
                <div className="originSource">
                  <span className="blind">출처</span>
                  해커스 토익
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
