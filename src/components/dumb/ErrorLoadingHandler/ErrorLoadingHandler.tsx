import Spinner from "../Spinner/Spinner";
import classes from "./ErrorLoadingHandler.module.css";

interface IErrorLoadingHandler {
  isLoading: boolean;
  isError: boolean;
}

const ErrorLoadingHandler: React.FC<IErrorLoadingHandler> = (props) => {
  const error = props.isError && (
    <div className={classes.Error}>
      <div>Error happened, please try later.</div>
    </div>
  );
  const spinner = props.isLoading && <Spinner />;
  return (
    <div className={classes.ErrorLoadingHandler}>
      {error}
      {spinner}
    </div>
  );
};

export default ErrorLoadingHandler;
