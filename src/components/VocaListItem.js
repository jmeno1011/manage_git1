import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./vocaListItem.css";
import axios from "axios";
import { useEffect } from "react";
import vocaData from "../json/toeic_voca_2021.json";

const VocaListItem = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <div>
      <header>
        <h1>Voca</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>
      <div
        style={{ height: 500, width: 550, margin: "1rem", overflow: "auto" }}
      >
        <VocaItem offset={offset} limit={limit} />
      </div>
      <Pagenation
        total={vocaData.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default VocaListItem;

const VocaItem = ({ offset, limit }) => {
  return (
    <>
      {vocaData.slice(offset, offset + limit).map((value) => (
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

const Pagenation = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </button>
    </div>
  );
};
