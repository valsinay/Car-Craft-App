import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function registerValidator(username, password, confirmPass) {
  if (username === "" || password === "" || confirmPass === "") {
    toast.error("All fields are required!");
    return false;
  }

  if (!username.trim() || !password.trim() || !confirmPass.trim()) {
    toast.error("Field cannot contain empty space or special symbols!");
    return false;
  }

  if (username.length < 4) {
    toast.error("Username must be at least 4 characters long!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long!");
    return false;
  }

  if (password !== confirmPass) {
    toast.error("Passwords do not match!");
    return false;
  }
  return true;
}

export default registerValidator;
