import { lightGreen } from "@mui/material/colors";
import "./search.css";

export default function Search() {
  return (
    <>
      <div
        style={{
          height: "340px",
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1671566149033-54a2600e49ad?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="h1"
          style={{
            fontWeight: 900,
            textAlign: "center",
            paddingTop: "40px",
            color: "white",
          }}
        >
          Digital Marketing Services
        </h1>
        <p style={{ color: "white", textAlign: "center", paddingTop: "1px" }}>
          Grow Your Client Base With Data-Driven and Targeted Strategies
        </p>
        <h2
          className="h2"
          style={{
            fontWeight: 600,
            textAlign: "center",
            paddingTop: "20px",
            color: "white",
          }}
        >
          Subscribe To Our Services
        </h2>
        <div className="search-container mt-4">
          <form className="search-form " role="search">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Enter your email address"
              aria-label="Search"
            />
            <button
              className="btn btn learn-more-btn bg-success search-button"
              type="submit"
            >
              Subcribe Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
