import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { Simulate, render } from "@testing-library/react";
import PersonalInfo from "../../components/Accounts/PersonalInfo/PersonalInfo.tsx";

test("User Can View Info and It is Correct", () => {
    const { constainer, getByTestId, getByText } = render(<PersonalInfo />);

    const userInfo = getByTestId("userInfo");
    const name = getByTestId("name");
    const gender = getByTestId("gender");
    const birthday = getByTestId("birthday");
    const email = getByTestId("email");
    const phoneNumber = getByTestId("phoneNumber");
    const govId = getByTestId("govId");
});
