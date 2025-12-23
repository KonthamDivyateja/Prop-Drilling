import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export const Component1 = () => {
  return (
    <div className="component-1">
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return <Component3 />;
};

const Component3 = () => {
  const { a, b } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </div>
  );
};

const Component4 = () => {
  const { c, d } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </div>
  );
};

const Component5 = () => {
  const { f } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  );
};

const Component6 = () => {
  const { e } = useContext(AppContext);
  return (
    <div>
      <h4>This is prop e: {e}</h4>
    </div>
  );
};
