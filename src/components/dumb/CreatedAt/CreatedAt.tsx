import classes from "./CreatedAt.module.css";

interface IDateProps {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

const CreatedAt: React.FC<IDateProps> = (props) => {
  const createdByBrowserTimezone = new Date(
    props.year,
    props.month - 1,
    props.day,
    props.hour,
    props.minute
  );

  return (
    <div className={classes.CreatedAt}>
      {createdByBrowserTimezone.toDateString()}
    </div>
  );
};

export default CreatedAt;
