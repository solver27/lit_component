// VueWrapper.jsx
import React, { useEffect, useRef, useContext } from 'react';
import { createApp } from 'vue';
import { LITContext } from '../../App'
import ChildComponent from "./ChildComponent.vue";

const VueWrapper = ({ callback }) => {
  const data = useContext(LITContext)

  const divRef = useRef(null);

  useEffect(() => {
    const vueApp = createApp(ChildComponent, { message: data.selectedField });
    vueApp.mount(divRef.current);

    return () => {
      vueApp.unmount();
    };
  }, [data]);

  return <div ref={divRef}></div>;

};

export default VueWrapper;
