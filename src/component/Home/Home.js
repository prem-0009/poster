import React from 'react';
import { connect } from 'react-redux';

export const Home = () => {
    return (
        <div>
            <h2>home</h2>
        </div>
    )
}


const mapStateToProps = (state) =>{
    console.log(state);
    
    return {
        state
    }
}

export default connect(mapStateToProps, )(Home)
