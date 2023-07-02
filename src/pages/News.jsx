import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { clearNews, getNews } from "../features/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import newsPng from "../assets/news.png";

const News = () => {
  const dispatch = useDispatch();
  const { news, error, loading } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(getNews());
    //£ cleanUp function (componentDidUnmount)
    return () => {
      dispatch(clearNews());
    };
  }, []);

  return (
    <>
      <h1>
        NEWS
        <img src={newsPng} alt="news" style={{ width: "2rem" }} />
      </h1>

      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} />
        </Box>
      )}

      {error && (
        <Typography variant="h2" color="error">
          {error}
        </Typography>
      )}

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {news?.map((item, index) => (
          <Card
            className="card"
            sx={{ maxWidth: 345, p: 1, m: 5, height: 550 }}
            key={index}
          >
            {item.urlToImage ? (
              <CardMedia
                component="img"
                height="250px"
                image={item?.urlToImage}
                alt="img"
                margin="1rem"
              />
            ) : (
              <CardMedia
                component="img"
                height="250px"
                image={newsPng}
                alt="img"
                margin="1rem"
                className="image"
              />
            )}

            <CardContent sx={{ height: 240 }}>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                href={item?.url}
                target="_blank"
                sx={{ fontWeight: 900 }}
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
