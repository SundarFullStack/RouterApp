import React from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const params = useParams();
  return (
    <div className="page" style={{ backgroundColor: "pink" }}>
      Blog -<p>Shopping {params.ProductCategoryItem}</p>
    </div>
  );
}
