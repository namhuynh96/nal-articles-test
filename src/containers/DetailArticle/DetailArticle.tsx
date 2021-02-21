import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as actions from "../../stores/actions";
import { IStoreState } from "../../stores/reducers";
import ErrorLoadingHandler from "../../components/dumb/ErrorLoadingHandler/ErrorLoadingHandler";
import ImageContainer from "../../components/smart/ImageContainer/ImageContainer";
import CreatedAt from "../../components/dumb/CreatedAt/CreatedAt";

import classes from "./DetailArticle.module.css";

const DetailArticle = () => {
  const { isLoading, isError, detailArticle } = useSelector(
    (state: IStoreState) => state.detailArticle
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(actions.getDetailArticle(id));

    return () => {
      dispatch(actions.removeDetailArticle());
    };
  }, [dispatch, id]);

  let articleElement: JSX.Element = <></>;
  if (detailArticle) {
    const [date, time] = detailArticle?.createdAt.split("T");
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");

    articleElement = (
      <div className={classes.Article}>
        <h4>{detailArticle.title}</h4>
        <CreatedAt
          year={Number(year)}
          month={Number(month)}
          day={Number(day)}
          hour={Number(hour)}
          minute={Number(minute)}
        />
        <div className={classes.Image}>
          <ImageContainer
            src={detailArticle.image}
            alt={detailArticle.title}
            mobileWidth="100%"
            imageRatio={75}
          />
        </div>
        <p>{detailArticle.content}</p>
      </div>
    );
  }

  const backHandler = () => {
    history.goBack();
  };

  return (
    <div>
      <div className={classes.BackButton}>
        <button type="button" className="btn btn-primary" onClick={backHandler}>
          Back
        </button>
      </div>
      <ErrorLoadingHandler isLoading={isLoading} isError={isError} />
      {articleElement}
    </div>
  );
};

export default DetailArticle;
