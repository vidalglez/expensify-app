// Higher Order Componrnt (HOC) - A component that renders another component
// Advantages:
// Reuse code
// Render hijacking
// Prop manipulation

import React from 'react';
import ReactDOM from 'react-dom';

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAdmin && <p>This is a private info. Please dont share</p>}
          <WrappedComponent {...props} />
        </div>
    );
};

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
   
    return (props) => (         
        <div>                
          {props.isAuthenticated ? (
            <WrappedComponent {...props}/> 
          ) : (
            <p>Please login first!</p>
          )}
        </div>
    );
}



const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin="false" info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));