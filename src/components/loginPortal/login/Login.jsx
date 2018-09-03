import React from 'react'

export const Login = () => (
  <form>
    <div>
      <label>
        Username:
        <input type="text" />
      </label>
    </div>
    <div>
      <label>
        Password:
        <input type="text" />
      </label>
    </div>
    <input type="submit" value="Submit" />
  </form>
);