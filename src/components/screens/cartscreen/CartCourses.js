import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./cart.css";

const CartCourses = () => {
  return (
    <>
      <div className="course__info">
        <div className="course__img">
          <img src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg?Expires=1622662300&Signature=kMfutAoGWs2WdY0t9W0qZ4bGdWhxSpdlRrGqiLY4-uoHWk~TCGtswmyMG4llG77PgiMUSoDj2QzTAbHWsl4CEGfkRS2NJiE7hIQ~j8U3j5rHayd5FO0ZWtMlxl8nS5Z6X26ukpUinOO2dS79nFXfw0U05vSvEm4X0CR445XIaHk3NvSzurpRjMD7e5ei~YPQCB8VPF5DhQngWj8mbxYMYNC6kV0Xq9DSTjxaZtGfTt6oUnGEr1KVMK2vym7uu90ZT3flgXtFODh8mk4UaCc2SKCnAXJy6yNJP9qmJH3cuNbc3geUDysYCmGIxPTARZS-nIcMrQ3o3BwUHNEe5HiyLA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
        </div>

        <div className="course__title">
          <h4>Hands On python and R data Science</h4>
          <p>by Krill Eremenko and 3 others</p>
        </div>

        <div className="remove__course">
          <DeleteIcon />
        </div>

        <div className="course__price">
          <p>$12.00</p>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CartCourses;
