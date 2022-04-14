// 定义全局引入组件文件
import Card from "./card";
import Button from "./button";
import Link from "./link";
import Input from "./input";
import Checkbox from "./checkbox";
import CheckboxGroup from "./checkbox-group";
import Tabs from "./tabs";
import Tag from "./tag";
import Dialog from "./dialog";
import Switch from "./switch";
import Radio from "./radio";
import RadioGroup from "./radio-group";
import Form from "./form";
import FormItem from "./form-item";
import Tree from "./tree";
import PageHeader from "./page-header";
import Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumb-item";
import Popover from "./popover";

const components = {
  Card,
  Button,
  Link,
  Input,
  Checkbox,
  CheckboxGroup,
  Tabs,
  Tag,
  Dialog,
  Switch,
  Radio,
  RadioGroup,
  Form,
  FormItem,
  Tree,
  PageHeader,
  Breadcrumb,
  BreadcrumbItem,
  Popover

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
