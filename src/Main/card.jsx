import "./card.css";

export default function Card({ head, content, image }) {
  return (
    <>
      <div id="Services">
        <div
          className="card container pt-2 pb-2 mt-5 mx-2 allcard"
          style={{ width: "25rem" }}
        >
          <div className="card-bod">
            <img
              src={image}
              className="card-img-top img-fluid h-60 allimages"
              alt="Random image"
            />
            <h5 className="card-title text-center">{head}</h5>
            <p className="card-text text-center">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
