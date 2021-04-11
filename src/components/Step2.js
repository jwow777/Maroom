import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

const Step2 = props => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Step 2</Typography>
      <label>
        Birthday:
        <input type="date" {...register("dateBirth", {
          required: {
            value: true,
            message: 'This is required'
          }
        })} />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email", {
          required: {
            value: true,
            message: 'This is required'
          },
          maxLength: {
            value: 20,
            message: 'Maximum 20 characters'
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'example@mail.com'
          }
        })}/>
        {errors.email && <span className="error">{errors.email.message}</span>}
      </label>
      <Button type="submit" variant="contained" color="primary">Step 3</Button>
    </form>
  );
};

export default withRouter(Step2);