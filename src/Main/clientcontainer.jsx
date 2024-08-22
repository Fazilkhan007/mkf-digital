import Client from "./client";
import "./clientcontainer.css";

export default function ClientContainer() {
  return (
    <>
      <div id="Results">
        <br></br>
        <h2 className="text-center">Join the ranks of clients here:</h2>
        <br></br>

        <div className="container ">
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/C/Catalina-logo-569BA1B477-seeklogo.com.gif"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/F/figma-logo-3C82F1B96E-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/H/honest-logo-5EBDE1D1FD-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/S/stripe-logo-8A2A67605A-seeklogo.com.png"
                }
              />
            </div>
            <br></br>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center bounceIn logo1 ">
              <Client
                image2={
                  "https://seeklogo.com/images/H/honest-bee-logo-28CDD1F6EC-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/S/Smart-logo-7AF8CBF351-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/L/lord-taylor-logo-32BDD3F9DC-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/H/haldiram-nagpur-logo-82C722F398-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/E/Eicher_Motors-logo-BEABB2D223-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/S/shopify-plus-logo-72E8AB3F5E-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/R/relaxo-footwear-logo-2AEFD95B3C-seeklogo.com.png"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center bounceIn logo1">
              <Client
                image2={
                  "https://seeklogo.com/images/T/tata-pipes-logo-330CBEA459-seeklogo.com.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
