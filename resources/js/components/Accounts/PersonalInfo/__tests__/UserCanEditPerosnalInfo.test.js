import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { Simulate, render } from "@testing-library/react";
// import PersonalInfo from "../PersonalInfo";
import { generateUser } from "../../../../__tests__/utils";
import InfoContainer from "../InfoContainer";

// test.skip("User Can View Info and It is Correct", () => {
//     // Arrange
//     const { getByTestId, getByText } = render(<PersonalInfo />);

//     const userInfo = generateUser();

//     const nameNode = getByTestId("name");
//     const genderNode = getByTestId("gender");
//     const birthdayNode = getByTestId("birthday");
//     const emailNode = getByTestId("email");
//     const phoneNumberNode = getByTestId("phoneNumber");
//     const govIdNode = getByTestId("govId");
//     // Act
//     console.log(nameNode);
//     // Assert
//     expect(nameNode.textContent).toContain(
//         `${userInfo.firstname}  ${userInfo.lastname}`
//     );
//     expect(genderNode.textContent).toContain(userInfo.gender);
// });

test("User can toggle edit mode", () => {
    //Arrange
    const handleEdit = jest.fn();

    const { getByText } = render(
        <InfoContainer title="name" description="Jim" edit={handleEdit} />
    );

    const editButtonNode = getByText("Edit");

    //Act

    ReactTestUtils.Simulate.click(editButtonNode);
    //Assert
    expect(handleEdit).toBeCalledTimes(1);
});
