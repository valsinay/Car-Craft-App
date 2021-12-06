import  React  from "react";
import { CheckmarkCircleOutline } from "react-ionicons";
import { toast } from "react-toastify";


export default function ToastContainer() {
  return (
    <div
      style={{
        height: "100%",
        borderLeft: "5px solid green",
        display: "flex",
        alignItems: "center",
        paddingLeft: 5,
      }}
    >
      <CheckmarkCircleOutline color={"green"} height="25px" width="25px" />
      <span style={{ fontWeight: "bold", color: "#000" }}>Success</span>
      <span style={{ marginLeft: 5 }}>You've registered!</span>
    </div>
  );
}
