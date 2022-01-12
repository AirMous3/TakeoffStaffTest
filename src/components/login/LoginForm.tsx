import Grid from "@mui/material/Grid/Grid";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";

import s from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { RootStateType } from "../../redux/store/store";
import { loginThunk } from "../../redux/reducers/appReducer/middleware/appMiddleware";
import { loginError } from "../../redux/reducers/appReducer/actions/appActions";

interface FormType {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootStateType) => state.app.loginError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FormType> = ({ login, password }) => {
    dispatch(loginThunk(login, password));
  };
  const onChange = () => {
    dispatch(loginError(""));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      <Grid container justifyContent={"center"}>
        <Grid item justifyContent={"center"}>
          <FormControl>
            <FormLabel>
              <p>use common test account credentials:</p>
              <p>Email: sonic@gmail.com</p>
              <p>Password: 1q2w3e4r</p>
            </FormLabel>
            <FormGroup>
              <TextField
                {...register("login", {
                  required: { value: true, message: "required field" },
                })}
                error={!!errors.login?.message}
                label="Email"
                margin="normal"
              />
              <div className={s.errorMessage}>
                {errors.login?.message}
                {error ? error : null}
              </div>

              <TextField
                {...register("password", {
                  required: { value: true, message: "required field" },
                })}
                error={!!errors.password?.message}
                type="password"
                label="Password"
                margin="normal"
              />
              <div className={s.errorMessage}>{errors.password?.message}</div>

              <Button
                className={s.button}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};
