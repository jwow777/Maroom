import { useStateMachine } from "little-state-machine";
import { Link } from "react-router-dom";
import updateAction from "../utils/updateAction";
import { Typography } from "@material-ui/core";

const Result = () => {
  const { state } = useStateMachine(updateAction);

  return (
    <>
      <Typography variant="h4">Congratulation!</Typography>
      <ul>
        <li><p>First Name:</p> {state.firstName}</li>
        <li><p>Last Name:</p> {state.lastName}</li>
        <li><p>Patronymic:</p> {state.patronymic}</li>
        <li><p>Birthday:</p> {state.dateBirth}</li>
        <li><p>Email:</p> {state.email}</li>
      </ul>
      <Link to="/" className="link">На главную</Link>
    </>
  );
};

export default Result;