import css from "./Notification.module.css";
import PropTypes from "prop-types";
export const Notification = ({ message }) => {
  return <div className={css.div_message}>{message}</div>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
