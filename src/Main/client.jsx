import "./client.css";

export default function Client({ image2 }) {
  return (
    <>
      <div className="container ">
        <img src={image2} className="m-3" height={"70px"} width={"120px"} />
      </div>
    </>
  );
}
