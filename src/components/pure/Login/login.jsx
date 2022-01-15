import React, { Component } from 'react';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';

import './login.css';

function Login({ className, label, autofocus, ...props }) {
  const [focus, setFocus] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    //set focus
    if (autofocus) {
      ref.current.focus();
    }
  }, []);
  return (
    <div
      className={classNames(
        'formField',
        { 'formField--focused': focus },
        className
      )}
    >
      <label className="formField-label">
        <span>{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          {...props}
        ></input>
      </label>
      <label className="formField-label">
        <span>{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          {...props}
        ></input>
      </label>
    </div>
  );
}


export default Login;
