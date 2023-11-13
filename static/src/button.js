
if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }



  function initializeCode() {

    input_area = document.getElementById("input-text");
    input_btn = document.getElementById("submit-data");

    input_btn.addEventListener("click", async () => {
        console.log(input_area.value);

        fetch("http://localhost:3000/list", {
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          body: '{ "text": "'+ input_area.value  +'"}'
        }).then(response => response.json())
        .then(data => {
          console.log(data);
        });

    });

  }