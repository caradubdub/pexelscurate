import * as React from "react";
import { shallow } from "enzyme";
import BottomNav from "../components/BottomNav";
import { jest } from "@jest/globals";
const Adapter = require("enzyme-adapter-react-16");
require("enzyme").configure({ adapter: new Adapter() });

describe("Bottom Nav bar", () => {
  let wrapper;
  let onClick = jest.fn();

  beforeEach(() => (wrapper = shallow(<BottomNav />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should contain a row div", function () {
    expect(wrapper.find(".row").length).toEqual(1);
  });

  it("should invoke method passed on the handleForward and handleBack prop when clicked", () => {
    wrapper.setProps({
      handleBack: onClick,
      handleForward: onClick,
      page: 1,
    });
    wrapper.find(".back").simulate("click");
    wrapper.find(".forward").simulate("click");
    expect(onClick.mock.calls.length).toEqual(2);
  });
});
