import React, { useState } from "react";
import "./loginStyle.css";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { fetchData } from "./loginSlice";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      dispatch(fetchData(formData))
      // navigate('home')
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };



  return (
    <div className="login--bg">
      <div className="login--contaner">
        <InputLabel className="label" htmlFor="username">
          Email Address*
        </InputLabel>
        <TextField
        sx={{
          input:{color:"white"},
          "& fieldset": { border: 'none' },
        }}
          size="small"
          className="inputfield"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          type="email"
        />
        {errors.email && <span className="errormess" style={{ color: 'red' }}>{errors.email}</span>}
        <InputLabel className="label">Password*</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          size="small"
          fullWidth
          sx={{
            "& fieldset": { border: 'none' },
          }}
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="inputfield"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && <span className="errormess" style={{ color: 'red' }}>{errors.password}</span>}
        <div className="login--btn">
          <Button
            sx={{ padding: ".6rem 1.5rem" }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Typography onClick={() => navigate("/forget")}>
            Forget password?
          </Typography>
        </div>
      </div>
    </div>
  );
}
