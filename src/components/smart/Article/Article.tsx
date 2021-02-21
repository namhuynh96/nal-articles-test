import { useHistory } from "react-router-dom";
import { IArticle } from "../../../stores/reducers/detailArticle";
import ImageContainer from "../ImageContainer/ImageContainer";
import CreatedAt from "../../dumb/CreatedAt/CreatedAt";

import classes from "./Article.module.css";

interface IArticleProps {
  article: IArticle;
}

const Article: React.FC<IArticleProps> = (props) => {
  const history = useHistory();

  const [date, time] = props.article.createdAt.split("T");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");

  const articleClickHandler = (id: string) => {
    history.push(`/article/${id}`);
  };

  return (
    <li
      className={["media", classes.Article].join(" ")}
      onClick={() => articleClickHandler(props.article.id)}
    >
      <div className={"mr-3"}>
        <ImageContainer
          src={props.article.image}
          alt={props.article.title}
          mobileWidth="150px"
          desktopWidth="240px"
          breakpoint={700}
          imageRatio={75}
        />
      </div>

      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.article.title}</h5>
        <CreatedAt
          year={Number(year)}
          month={Number(month)}
          day={Number(day)}
          hour={Number(hour)}
          minute={Number(minute)}
        />
        <div>{props.article.content}</div>
      </div>
    </li>
  );
};

export default Article;
