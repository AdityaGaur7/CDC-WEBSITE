import React from 'react'
import Form from './Formy'
import TitleCenter from "../TitleCenter/TitleCenter";
const ideaImage =
  "https://firebasestorage.googleapis.com/v0/b/evna-1c728.appspot.com/o/img%2Fcommunity.png?alt=media&token=3fc93805-da1d-4a16-8a1d-34428bc4e5ad";
 
  const data = {
    title: "FeedBack",
    description:"give your feedback , this will help us improve and enhance our responsibility"
  };
const Fo = () => {
  return (
    <div>
<div style={{margin:'auto', textAlign:'center'}}>
          <TitleCenter {...data}/>
          </div>
<div className="form_bg_color idea_container">
          {" "}
          <div className="container ">
            <div className="row main_content">
              <div className="col-lg-7 col-md-12 mx-auto">
                <div>
                  <img className="idea_img" src={ideaImage} alt="Idea-Image" />
                </div>
              </div>
              
              <div className="col-lg-5 col-md-12 form_container">
                <div className="form_content">
                  <Form placeholder="Name*" />
                  <Form placeholder="Email*" />
                  <Form placeholder="Branch*" />
                  <Form placeholder="Year*" />
                  <Form placeholder="Idea*" />
                  <button type='submit' style={{width:'100%',margin:'auto',textAlign:'center'}}>submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Fo