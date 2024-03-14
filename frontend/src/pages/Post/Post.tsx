import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";

export const Post = () => {
  const savePost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <form
      className="form"
      action="http://localhost:8080/api/v1/destination"
      method="POST"
    >
      <TextField
        required
        name="title"
        className="input"
        label="Title"
        variant="outlined"
      />
      <TextField
        name="description"
        className="input"
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
      />
      <input type="file" name="images" placeholder="Images" />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};
