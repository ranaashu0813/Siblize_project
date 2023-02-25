import React from "react";
import Cards from "../Card/Cards";
import SimpleMap from "../UI/Maps/GoogleMaps";

const Page = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center",margin:"50px"}}>
        <div style={{display:"flex",width:"100%",gap:"20px"}}>
          <div style={{flex:"4"}}>
            <Cards/>
          </div>
          <div style={{flex:"2",position:"sticky",padding:"10px",top:"0"}}>
            <SimpleMap/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
