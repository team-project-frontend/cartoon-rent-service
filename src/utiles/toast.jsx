import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const success = (text) =>
  toast.success(text, { position: "top-center" });
export const error = (text) => toast.error(text, { position: "top-center" });

export const Toast = () => {
  return <ToastContainer />;
};
