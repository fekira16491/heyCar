import {
  GATEWAY_SUCESS,
  PROJECT_SUCESS,
} from "../../../Components/redux/action/actionType";
import gateWayReducer from "../../../Components/redux/reducer/gateWayReducer";

describe("projectReducer", () => {
  describe("when productReducer and action{type:PROJECT_SUCESS}", () => {
    it("should return updated state", () => {
      const gatewayItem = {
        description:
          "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
        apiKey: "sk_test_6eC49HqLyjWDarjtT1zdp7dc",
        description:
          "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
        gatewayId: "i6ssp",
        name: "Gateway 1",
        secondaryApiKey: "",
        type: "Stripe",
        userIds: ["rahej"],
      };

      const state = {
        gatewayList: [],
      };
      let action = { type: GATEWAY_SUCESS, payload: gatewayItem };
      let result = gateWayReducer(state, action);
      expect(result).toStrictEqual({ gatewayList: gatewayItem });
    });
  });

  describe("when gatewayReducer and action{type:default}", () => {
    it("should return updated state", () => {
      let action = { type: "DEFAULT_ACTION" };
      const state = {
        gatewayList: [],
      };

      let result = gateWayReducer(state, action);
      expect(result).toStrictEqual(state);
    });
  });
});
