import React from "react";
import Scardcrea from "./Scardcrea/Scardcrea";

export default function Cybersecurity({ data }) {
  return (
    <div className="page">
      <div
        className="col-md-12"
        style={{ marginLeft: "117px", marginTop: "-20px" }}
      >
        <div className="row">
          {data.map((d, i) => (
            <Scardcrea data={d} key={`scard-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
