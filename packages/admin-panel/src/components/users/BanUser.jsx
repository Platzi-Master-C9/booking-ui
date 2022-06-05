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

export const BanUser = ({ userData, isChangeStatusActive }) => {
  const [reason, setReason] = useState("");
  const router = useRouter();
  const { userId } = router.query;
  const BASE_URL = `https://admin-panel-booking-services.herokuapp.com/admin-panel/user-status/${userId}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(BASE_URL, {
        status: "BANNED",
        reason: reason,
      })
      .then((data) => console.log(data, userData.status, reason))
      .catch((err) => console.log(err));
  };

  return (
    <ChangeStatusForm
      onSubmit={handleSubmit}
      isChangeStatusActive={isChangeStatusActive}
    >
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
          onChange={(e) => setReason(e.target.value)}
          required
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
          onChange={(e) => setReason(e.target.value)}
        />
        <label for="Private property damage">Private property damage</label>
      </div>

      <div>
        <input
          type="radio"
          id="opt 3"
          name="banning_options"
          value="Bad rating"
          onChange={(e) => setReason(e.target.value)}
        />
        <label for="Bad rating">Bad rating</label>
      </div>

      <button>Ban user</button>
    </ChangeStatusForm>
  );
};
