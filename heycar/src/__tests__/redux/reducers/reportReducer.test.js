import { REPORT_SUCESS } from "../../../Components/redux/action/actionType";
import reportReducer from "../../../Components/redux/reducer/reportReducer";

describe("reportReducer", () => {
  describe("when reportReducer and action{type:PROJECT_SUCESS}", () => {
    it("should return updated state", () => {
      const reportItem = {
        paymentId: "6149cf567833e57669e60455",
        amount: 2663.69,
        projectId: "ERdPQ",
        gatewayId: "i6ssp",
        userIds: ["rahej"],
      };

      const state = {
        reportList: [],
      };
      let action = { type: REPORT_SUCESS, payload: reportItem };
      let result = reportReducer(state, action);
      expect(result).toStrictEqual({ reportList: reportItem });
    });
  });

  describe("when reportReducer and action{type:default}", () => {
    it("should return updated state", () => {
      let action = { type: "DEFAULT_ACTION" };
      const state = {
        reportList: [],
      };

      let result = reportReducer(state, action);
      expect(result).toStrictEqual(state);
    });
  });
});
