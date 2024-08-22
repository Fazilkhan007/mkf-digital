import * as React from "react";
import "./mainpage.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Header/navbar";
import CompanyDetails from "./companydetails";
import Card from "./card";
import Client from "./client";

import ClientContainer from "./clientcontainer";
import ContactUs from "../Footer/contactus";
import Footer from "../Footer/footer";

export default function MainPage() {
  return (
    <>
      <BrowserRouter>
        <div className="mainpage">
          <NavBar />
          <CompanyDetails />

          <hr></hr>

          <h2 className="text-center">
            Our <b>Digital Marketing Expertise</b>
          </h2>

          <div>
            <div className="d-flex mx-2">
              <Card
                head={"SEO"}
                content={`Through careful keyword 
              research and white hat practices, 
              we can help you achieve high rankings in the major search engines`}
                image={
                  "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fHww"
                }
              />
              <Card
                head={"WEBSITE DESIGN AND DEVELOPMENT"}
                content={
                  "With millions of websites on the internet you want to be sure your website stands out, represents you well, and most importantly, helps your organization grow."
                }
                image={
                  "https://plus.unsplash.com/premium_photo-1675793714917-dd0f7efc0165?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fFdFQlNJVEUlMjBERVNJR04lMjBBTkQlMjBERVZFTE9QTUVOVHxlbnwwfHwwfHx8MA%3D%3D"
                }
              />
              <Card
                head={`SOCIAL MEDIA
MARKETING`}
                content={
                  "Social media marketing is a critical element in staying connected with your audience. Working independently of, or side-by-side with you, we help keep your social community engaged."
                }
                image={
                  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U09DSUFMJTIwTUVESUElMjBNQVJLRVRJTkd8ZW58MHx8MHx8fDA%3D"
                }
              />
            </div>
            <div className="d-flex mx-2">
              <Card
                head={"PAY PER CLICK – PPC"}
                content={
                  "While SEO offers long-term growth, sometimes you need an immediate boost. Thrive’s PPC campaign ensures that the money you spend is put to the very best possible use."
                }
                image={
                  "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBBWSUyMFBFUiUyMENMSUNLJTIwJUUyJTgwJTkzJTIwUFBDfGVufDB8fDB8fHww"
                }
              />
              <Card
                head={"VIDEO PRODUCTION"}
                content={
                  "There is no more powerful way to get your message across than through video. Engage your audience by telling your story and sharing your mission."
                }
                image={
                  "https://plus.unsplash.com/premium_photo-1684433904920-4f2cab51a056?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VklERU8lMjBQUk9EVUNUSU9OfGVufDB8fDB8fHww"
                }
              />
              <Card
                head={"CONTENT WRITING "}
                content={
                  "Our content writers know Search Engine Optimization and create great marketing copy, designed to be informative and compelling, pushing your business objectives."
                }
                image={
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q09OVEVOVCUyMFdSSVRJTkd8ZW58MHx8MHx8fDA%3D"
                }
              />
            </div>
            <div className="d-flex mx-2">
              <Card
                head={`REPUTATION MANAGEMENT`}
                content={
                  "Your reputation is everything. Our team of experts can help protect and enhance your reputation online for tangible, long-term results.  "
                }
                image={
                  "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVwdXRhdGlvbiUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
                }
              />
              <Card
                head={`CONVERSION OPTIMIZATION`}
                content={
                  "Turn more site visitors into customers! Our experts utilize the latest Conversion Optimization techniques to help increase the percentage of passive website visitors into active users."
                }
                image={
                  "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09OVkVSU0lPTiUyME9QVElNSVpBVElPTnxlbnwwfHwwfHx8MA%3D%3D"
                }
              />
              <Card
                head={"AMAZON MARKETING"}
                content={
                  "Getting found on Amazon is not easy! Competition is fierce and thick. We’ll help your products get found in this massive marketplace."
                }
                image={
                  "https://images.unsplash.com/photo-1590599145008-e4ec48682067?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFNQVpPTnxlbnwwfHwwfHx8MA%3D%3D"
                }
              />
            </div>
          </div>
          <hr></hr>
        </div>
        <ClientContainer />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}
