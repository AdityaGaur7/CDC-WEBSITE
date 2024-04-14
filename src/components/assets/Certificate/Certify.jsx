// CertificateVerifier.js

import React, { useState } from "react";
import axios from "axios";

const CertificateVerifier = () => {
  const [certificateId, setCertificateId] = useState("####");
  const [verify, setVerify] = useState(false);
  const [msg, setmsg] = useState("");
  const handleVerify = async () => {
    //  console.log(typeof(certificateId));
    try {

      const response = await axios.get(`https://cdc-website-backend.vercel.app/verify/${certificateId}`, { certificateId });

      setVerify(true);
      console.log(response.data);
      if (verify) {
        setmsg("Certificate found");
      } else {
        setmsg("Certificate not found");
      }
    } catch (error) {
      setmsg("Certificate not found");
      console.error("Error verifying certificate ID:");
      setVerify(false);
    }
  };

  return (
    <div
      className="certi-css"
      style={{ margin: "3rem", height: "50vh", textAlign: "center" }}
    >
      <div className="certicontainer">
        <h2>Certificate Verifier</h2>
        <label htmlFor="certificateId">Enter Certificate ID:</label>
        <br />
        <input
          style={{ margin: "1rem" }}
          type="text"
          id="certificateId"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <br />
        <button onClick={handleVerify}>Verify</button>
        <br />
        <br />
        {verify ? (
          <h1>Certificate Found</h1>
        ) : (
          <h1 style={{ color: "red" }}>Enter valid Certificate Id</h1>
        )}
      </div>
    </div>
  );
};

export default CertificateVerifier;
