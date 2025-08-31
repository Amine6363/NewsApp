import image from "../assets/news.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100">
      <img
        src={src ? src : image}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 70) : "Untitled"}</h5>
        <p className="card-text flex-grow-1">
          {description ? description.slice(0, 100) : "No description available"}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
