import React from 'react';
import { connect } from "react-redux";


export const ProfilePage = (props) => {
    console.log('profilepage',props);
    
    return (
        <div>
            ProfilePage
        </div>
    )
}


const mapStateToProps = (state) => {
    
  
    return {
      state,
    };
  };
  
  export default connect(mapStateToProps,)(ProfilePage);