import * as React from "react";
import { shallow } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import Index from "../pages/index";
import Head from "next/head";
import NavBar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

require("enzyme").configure({ adapter: new Adapter() });

describe("Index", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Index data={[]} />)));

  it("should render without throwing an error", function () {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contain the Head", () => {
    expect(wrapper.containsMatchingElement(Head)).toEqual(true);
  });

  it("should render the Navbar component", () => {
    expect(wrapper.containsMatchingElement(NavBar)).toEqual(true);
  });

  it("should render the BottomNav component", () => {
    expect(wrapper.containsMatchingElement(BottomNav)).toEqual(true);
  });
});
