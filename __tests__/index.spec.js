import * as React from "react";
import { shallow, configure } from "enzyme";
import Index from "../pages/index";
import Head from "next/head";
import NavBar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
const Adapter = require("enzyme-adapter-react-16");
require("enzyme").configure({ adapter: new Adapter() });

describe("Index", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Index data={[]} />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should contain the Head", () => {
    expect(wrapper.containsMatchingElement(Head)).toEqual(true);
  });

  it("should render the Navbar component", () => {
    expect(wrapper.containsMatchingElement(NavBar)).toEqual(true);
  });

  it("should render the BottomNav component", () => {
    expect(wrapper.containsMatchingElement(BottomNav)).toEqual(true);
  });

  it("should render a thumbnail section", () => {
    expect(wrapper.find(".tnsection").length).toEqual(1);
  });
});
