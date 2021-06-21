import * as React from "react";
import { shallow } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import NavBar from "../components/NavBar";
require("enzyme").configure({ adapter: new Adapter() });

describe("Top Nav bar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavBar />)));

  it("should render without throwing an error", function () {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
