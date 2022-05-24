import styled from "styled-components";

const ChangeStatusForm = styled.form`
  display: ${({ isChangeStatusActive }) =>
    isChangeStatusActive ? "flex" : "none"};
  flex-direction: column;
  margin-top: 0.6em;
  p {
    font-size: 0.8em;
    margin-bottom: 0.6em;
  }
  div {
    margin-bottom: 3px;
    input {
      margin-right: 0.5em;
    }
  }
  button {
    padding: 0.6em 1em;
    font-size: 1em;
    cursor: pointer;
    background-color: #f8475f;
    border: none;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    margin: 1em 7em;

    &:hover {
      background-color: #e81431;
    }
  }
`;

export const ChangeStatus = ({ userData, isChangeStatusActive }) => {
  return (
    <ChangeStatusForm isChangeStatusActive={isChangeStatusActive}>
      <p>
        This user is currently <strong>{userData.status}</strong>. <br /> In
        order <strong>to ban this user</strong> select an option:{" "}
      </p>

      <div>
        <input
          type="radio"
          id="opt 1"
          name="banning_options"
          value="Non-compliance with the policies"
        />
        <label for="Non-compliance with the policies">
          Non-compliance with the policies
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="opt 2"
          name="banning_options"
          value="Private property damage"
        />
        <label for="Private property damage">Private property damage</label>
      </div>

      <div>
        <input
          type="radio"
          id="opt 3"
          name="banning_options"
          value="Bad rating"
        />
        <label for="Bad rating">Bad rating</label>
      </div>

      <button>Ban user</button>
    </ChangeStatusForm>
  );
};
