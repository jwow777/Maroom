import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

const Step1 = props => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Step 1</Typography>
      <label>
        First Name:
        <input type="text" {...register("firstName", {
          required: {
            value: true,
            message: 'This is required'
          },
          minLength: {
            value: 3,
            message: 'Minimum three characters'
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Latin letters only'
          }
        })} />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </label>
      <label>
        Last Name:
        <input type="text" {...register("lastName", {
          required: {
            value: true,
            message: 'This is required'
          },
          minLength: {
            value: 3,
            message: 'Minimum three characters'
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Latin letters only'
          }
        })}/>
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}
      </label>
      <label>
        Patronymic:
        <input type="text" {...register("patronymic", {
          required: {
            value: true,
            message: 'This is required'
          },
          minLength: {
            value: 3,
            message: 'Minimum three characters'
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Latin letters only'
          }
        })}/>
        {errors.patronymic && <span className="error">{errors.patronymic.message}</span>}
      </label>
      <Button type="submit" variant="contained" color="primary">Step 2</Button>
    </form>
  );
};

export default withRouter(Step1);