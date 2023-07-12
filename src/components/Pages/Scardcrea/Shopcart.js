import React from "react";

function Shopcart({ data = {} }) {
  return (
    <div className="card text-center">
      <h5 className="card-header">{data.name}</h5>
      <div className="card-body">
        <div className="img">
          <img
            src={data.src}
            alt=""
            style={{ height: "550px", width: "750px" }}
          />
        </div>
        <div style={{ width: "900px", marginLeft: "232px" }}>
          <h6 className="card-text text-start mt-5">{data.subDesc}</h6>
        </div>
      </div>
    </div>
  );
}

export default Shopcart;
