import DayGraph from "./DayGraph";

import {shallow} from "enzyme";

describe("Test DayGraph components", () => {
    it("Deberia renderizar DayGraph", () => {
      const wrapper = shallow(<DayGraph />);
      expect(wrapper).toHaveLength(1);
    });
});