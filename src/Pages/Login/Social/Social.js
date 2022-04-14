import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";



const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let allerror;

    if (error) {
          allerror= <div>
                        <p className="text-danger">Error: {error.message}</p>
                    </div>
      }

    if(user){
        navigate('/home')
    }  

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "lightgray", width: "50%" }}
        ></div>
        <p className="mx-3 mt-3">OR</p>
        <div
          style={{ height: "1px", backgroundColor: "lightgray", width: "50%" }}
        ></div>
      </div>
      {allerror}
      <div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-primary w-50 d-block mx-auto my-2">
          <img
            style={{ width: "24px" }}
            src="https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png"
            alt=""
          />
          <span className="mx-2">Login with Google</span>
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img
            style={{ width: "24px" }}
            src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
            alt=""
          />
          <span className="mx-2">Login with Facebook</span>
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img
            style={{ width: "24px" }}
            src="https://pngimg.com/uploads/github/github_PNG42.png "
            alt=""
          />
          <span className="mx-2">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
