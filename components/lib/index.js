// 定义全局引入组件文件
import Card from "./card";
import Button from "./button";
import Link from "./link";
import Input from "./input";
import Checkbox from "./checkbox";
import CheckboxGroup from "./checkbox-group";
import Tabs from "./tabs";
import Tag from "./tag";

const components = {
  Card,
  Button,
  Link,
  Input,
  Checkbox,
  CheckboxGroup,
  Tabs,
  Tag
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
