import styled from "styled-components";

const ChangeStatusForm = styled.form`
  display: ${({ isChangeStatusActive }) =>
    isChangeStatusActive ? "block" : "none"};
`;

export const ChangeStatus = ({ userData, isChangeStatusActive }) => {
  return (
    <ChangeStatusForm isChangeStatusActive={isChangeStatusActive}>
      <p>
        This user is currently <strong>{userData.status}</strong>. <br /> In
        order to ban this user select an option:{" "}
      </p>
      <input
        type="radio"
        id="opt 1"
        name="banning_options"
        value="Non-compliance with the policies"
      />
      <label for="Non-compliance with the policies">
        Non-compliance with the policies
      </label>

      <input
        type="radio"
        id="opt 2"
        name="banning_options"
        value="Private property damage"
      />
      <label for="Private property damage">Private property damage</label>

      <input
        type="radio"
        id="opt 3"
        name="banning_options"
        value="Bad rating"
      />
      <label for="Bad rating">Bad rating</label>
    </ChangeStatusForm>
  );
};
