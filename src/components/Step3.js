import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import { useRef } from "react";

const Step3 = props => {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Step 3</Typography>
      <label>
        Password:
        <input type="password" {...register("password", {
          required: {
            value: true,
            message: 'This is required'
          },
          minLength: {
            value: 6,
            message: 'Minimum six characters'
          }
        })}/>
        {errors.password && <span className="error">{errors.password.message}</span>}
      </label>
      <label>
        Password confirmation:
        <input type="password" {...register("passwordСonfirmation", {
          required: {
            value: true,
            message: 'This is required'
          },
          minLength: {
            value: 6,
            message: 'Minimum six characters'
          },
          validate: value => value === password.current || "The passwords do not match"
        })}/>
        {errors.passwordСonfirmation && <span className="error">{errors.passwordСonfirmation.message}</span>}
      </label>
      <Button type="submit" variant="contained" color="primary">Register</Button>
    </form>
  );
};

export default withRouter(Step3);