// 定义全局引入组件文件
import Card from "./card";
import Button from "./button";
import Link from "./link";

const components = {
  Card,
  Button,
  Link
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
}

const API = {
  install
};

export default API;
