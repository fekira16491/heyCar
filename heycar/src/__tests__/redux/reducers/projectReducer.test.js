import { PROJECT_SUCESS } from "../../../Components/redux/action/actionType";
import projectReducer from "../../../Components/redux/reducer/projectReducer";

describe("projectReducer", () => {
  describe("when productReducer and action{type:PROJECT_SUCESS}", () => {
    it("should return updated state", () => {
      const projectItem = {
        description:
          "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
        gatewayIds: ["gDJ2s"],
        image: "https://mvpmatch.co/images/logo.svg",
        industry: "IT",
        name: "Project 1",
        projectId: "bgYhx",
        rule: "Manual Selection",
        structure: "Sole proprietorship",
        userIds: ["rahej"],
        website: "https://mvpmatch.co/",
      };

      const state = {
        projectList: [],
      };
      let action = { type: PROJECT_SUCESS, payload: projectItem };
      let result = projectReducer(state, action);
      expect(result).toStrictEqual({ projectList: projectItem });
    });
  });

  describe("when projectreducer and action{type:default}", () => {
    it("should return updated state", () => {
      let action = { type: "DEFAULT_ACTION" };
      const state = {
        projectList: [],
        isLoading: false,
      };

      let result = projectReducer(state, action);
      expect(result).toStrictEqual(state);
    });
  });
});
