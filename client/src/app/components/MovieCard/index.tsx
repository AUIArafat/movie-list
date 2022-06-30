import { Image, Rate } from "antd";
import moment from "moment";
import { HeartFilled } from "@ant-design/icons";
import { MovieData } from "../../modules/MoviesModule/slice/types";
import {
  CardBody,
  CardContainer,
  CardTitle,
  MovieCategory,
  MovieRating,
  ReleaseDate,
} from "./styles";

interface IProps {
  movie: MovieData;
}
const MovieCard = ({ movie }: IProps) => {
  return (
    <CardContainer>
      <Image
        alt={movie.title}
        src={movie.posterPath}
        height={300}
        width={"100%"}
      />
      <div>
        <CardBody>
          <CardTitle>
            {movie.title}{" "}
            {movie.isFavorite ? (
              <HeartFilled style={{ color: "#f5c51e" }} />
            ) : null}
          </CardTitle>
          <MovieRating>
            <Rate value={Number(movie.rating) || 0} disabled />{" "}
            {Number(movie.rating).toFixed(2)}/5.00
          </MovieRating>
          <ReleaseDate>
            Release Date: {moment(movie.releaseDate).format("YYYY-MM-DD")}
          </ReleaseDate>
          <MovieCategory>{movie.category}</MovieCategory>
        </CardBody>
      </div>
    </CardContainer>
  );
};

export default MovieCard;
