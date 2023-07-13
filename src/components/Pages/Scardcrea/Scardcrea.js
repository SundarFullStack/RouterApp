import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Bcardcrea from "./Bcardcrea";

export default function Scardcrea({ data = {} }) {
  console.log(data.src);
  return (
    <div
      className="col-md-4"
      style={{ marginTop: "44px", marginRight: "-80px", height: "500px" }}
    >
      <ul>
        <div
          className="card"
          style={{
            padding: "7px",
            width: "18rem",
          }}
        >
          <NavLink to={data.link}>
            <img
              src={data.src}
              className="img-fluid"
              style={{ height: "212px", width: "276px" }}
              alt="..."
            />
          </NavLink>

          <div className="card-body text-start">
            <b>{data.name}</b>
            <div className="text-start">
              <small>{data.Desc}</small>

              <div
                className="mt-1"
                style={{
                  color: "rgb(15, 182, 15)",
                  fontWeight: "bold",
                  fontSize: "11px",
                }}
              >
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
