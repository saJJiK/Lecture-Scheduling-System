import { Grid, Input, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Userform = ({ isUpdated, setIsEdit, setIsUpdated, data, isEdit }) => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateUser = () => {
    const updatedUserData = {
      username: username,
      email: email,
    };
    console.log("updatedUserData", updatedUserData);

    Axios.put(`http://localhost:3000/api/users/${id}`, updatedUserData)
      .then((response) => {
        console.log("User updated successfully.", response);
        setIsUpdated(!isUpdated);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  useEffect(() => {
    setIsEdit(false);
    setId("");
    setUsername("");
    setEmail("");
    setPassword("");
  }, [isUpdated]);

  const addUser = () => {
    // e.preventDefault();
    Axios.post("http://localhost:3000/api/users/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        console.log("User added successfully.", response);
      })
      .then(() => {
        setIsUpdated(!isUpdated);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setUsername(data.username);
      setEmail(data.email);
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30",
        display: "block",
      }}
    >
      {/* <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#0000000" }}>
          <h3>Lecturer Register form</h3>
          <Button
            sx={{
              width: "100px",
              margin: "auto",
              marginBottom: "20px",
              backgroundColor: "#00c6e6",
              color: "#000000",
              marginLeft: "15px",
              marginTop: "20px",

              "&:hover": {
                opacity: "0.7",
                backgroundColor: "#00c6e6",
              },
            }}
            onClick={() => {
              setIsEdit(false);
              setId("");
              setUsername("");
              setEmail("");
              setPassword("");
            }}
          >
            Add user
          </Button>
        </Typography>
      </Grid> */}

      {isEdit && (
        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "black",
            
            }}
          >
            ID
          </Typography>
          <Input
            type="name"
            id="id"
            name="id"
            disabled
            sx={{ width: "400px" }}
            value={id}
            // onChange={(e) => setId(e.target.value)}
          />
        </Grid>
      )}

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#00000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "black",
          }}
        >
          Username
        </Typography>
        <Input
          type="name"
          id="username"
          name="username"
          sx={{ width: "400px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#00000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "black",
          }}
        >
          Email
        </Typography>
        <Input
          type="email"
          id="email"
          name="email"
          sx={{ width: "400px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      {!isEdit && (
        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#00000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "black",
            }}
          >
            Password
          </Typography>
          <Input
            type="password"
            id="password"
            name="password"
            sx={{ width: "400px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      )}

<Link to="/entryreg" ><Button
        sx={{
          margin: "auto",
          width: "100px",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",

          "&:hover": {
            opacity: "0.7",
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={() => (isEdit ? updateUser() : addUser())}
      >
        {isEdit ? "Update" : "Add New Lecturer"}
      </Button></Link>
    </Grid>
  );
};

export default Userform;
