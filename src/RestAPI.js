import React, { useState } from "react";

import axios from "axios";

function RestAPI() {
  const [text, setText] = useState([]);

  return (
    <>
      <h1>REST API 연습</h1>
      <div className="btn-primary">
        <button
          onClick={() => {
            axios
              .post("http://52.78.219.226:80/api/review/", {
                title: "제목",
                content: "내용",
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST
        </button>
        <button
          onClick={() => {
            axios
              .get("http://52.78.219.226:80/api/review/")
              .then((response) => {
                setText([...response.data]);
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          GET
        </button>
      </div>
      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, {e.title}, {e.content}, {e.update_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => {
                axios.delete(`http://52.78.219.226:80/api/review/${e.id}`);
                setText(text.filter((text) => text.id !== e.id));
              }}
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      ))}
    </>
  );
}

export default RestAPI;
