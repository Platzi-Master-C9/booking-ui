import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
    background-color: #1572a1;
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

export const ActiveUser = ({ userData, isChangeStatusActive }) => {
  const [reason, setReason] = useState("");
  const router = useRouter();
  const { userId } = router.query;
  const BASE_URL = `https://admin-panel-booking-services.herokuapp.com/admin-panel/user-status/${userId}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(BASE_URL, {
        status: "ACTIVE",
        reason: reason,
      })
      .then((data) => console.log(data, userData.status))
      .catch((err) => console.log(err));
  };

  return (
    <ChangeStatusForm
      onSubmit={handleSubmit}
      isChangeStatusActive={isChangeStatusActive}
    >
      <p>
        This user is currently <strong>{userData.status}</strong>. <br /> In
        order <strong>to active this user</strong> confirm the option:{" "}
      </p>

      <div>
        <input
          type="checkbox"
          id="Active_user"
          name="Active_user"
          value="User appeal was approved"
          onChange={(e) => setReason(e.target.checked)}
          required
        />
        <label for="User appeal was approved">User appeal was approved</label>
      </div>
      <button>Active user</button>
    </ChangeStatusForm>
  );
};
