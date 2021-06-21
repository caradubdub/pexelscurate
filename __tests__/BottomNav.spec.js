import * as React from "react";
import { shallow } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import BottomNav from "../components/BottomNav";
require("enzyme").configure({ adapter: new Adapter() });

describe("Bottom Nav bar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<BottomNav />)));

  it("should render without throwing an error", function () {
    expect(wrapper.find("span").length).toEqual(1);
  });
});
