import * as React from "react";
import { shallow } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import Thumbnail from "../components/Thumbnail";
require("enzyme").configure({ adapter: new Adapter() });

describe("Thumbnail", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Thumbnail />)));

  it("should render without throwing an error", function () {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
