import React from "react";
import { Simulate } from "react-dom/test-utils";
import { render, getByLabelText } from "@testing-library/react";
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

    Simulate.click(editButtonNode);
    //Assert
    expect(handleEdit).toBeCalledTimes(1);
});

test("User can edit their name(text input)", () => {
    //Arrange
    let editing = true;
    const newName = "Bennet";
    const toggleEditing = jest.fn(() => (editing = false));
    const handleEditSubmit = jest.fn();
    const title = "name";
    const details = "Jane";

    const { container, getByText, getByLabelText } = render(
        <InfoContainer
            inputType="text"
            toggle={editing}
            data-testid="name"
            title={title}
            details={details}
            edit={toggleEditing}
            submitEdit={handleEditSubmit}
        />
    );

    const formNode = container.querySelector("form");
    const inputNode = getByLabelText(title);
    const submitButton = getByText("Save");
    const editToggleButton = getByText("Cancel");

    //Act

    inputNode.value = newName;
    Simulate.submit(formNode);
    Simulate.click(editToggleButton);

    //Assert
    expect(toggleEditing).toHaveBeenCalledTimes(1);
    expect(editing).toEqual(false);
    expect(handleEditSubmit).toHaveBeenCalledTimes(1);
    // expect(handleEditSubmit).toHaveBeenCalledWith(newName);
    expect(submitButton.type).toBe("submit");
});
