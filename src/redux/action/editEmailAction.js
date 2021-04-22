import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const handleChangeEmail = (newEmail, userName) => async (dispatch) => {
  console.log(newEmail, userName);
  try {
  let changeEmail =  await axios({
        method: "patch",
        url: `http://localhost:4000/api/users/update-email`,
        data: {
         newEmail:newEmail,
         userName:userName
        },
      })

      console.log(changeEmail);
      
      


      dispatch({
          type:actionTypes.EDIT_EMAIL,
          payload:changeEmail.data
      })
  } catch (e) {
      console.log(e);
      
  }
  

};
