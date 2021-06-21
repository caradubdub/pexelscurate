import * as React from "react";
import { shallow, mount, configure } from "enzyme";
import Thumbnail from "../components/Thumbnail";
import Image from "next/image";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Thumbnail", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Thumbnail
        image={{
          id: 7362829,
          url: "https://www.pexels.com/photo/wood-light-dawn-landscape-7362829/",
          photographer: "Bayu Samudro",
          photographer_url: "https://www.pexels.com/@bayusamudro",

          src: {
            medium:
              "https://images.pexels.com/photos/7362829/pexels-photo-7362829.jpeg?auto=compress&cs=tinysrgb&h=350",
          },
        }}
      />
    );
  });

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should contain an image", function () {
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it("should show info popup if image is selected", function () {
    wrapper.setProps({ showPopup: true, selected: 7362829 });
    expect(wrapper.find(".popup").length).toEqual(1);
  });
});
