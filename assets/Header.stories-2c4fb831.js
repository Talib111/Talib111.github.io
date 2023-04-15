var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime-23d4fcfb.js";import"./index-038215e6.js";import{H as n}from"./Header-18d6fe73.js";import"./iframe-b04b0936.js";import"./index-50ee27ec.js";import"./Button-e9d47cb8.js";const L={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}},t=o(e=>s.jsx(n,{...e}),"Template"),l=t.bind({});l.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={};const x=["LoggedIn","LoggedOut"];export{l as LoggedIn,d as LoggedOut,x as __namedExportsOrder,L as default};
//# sourceMappingURL=Header.stories-2c4fb831.js.map
