const express = require("express");
const usersData = require("../db/users");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const authVerify=require('../middlewares/authVerify.mw')


const SignUpHandler = (req, res) => {
  const { username, password } = req.body;
  //  console.log(username,password);

  const isUserExist = usersData.users.some(
    (user) => user.username === username
  );
  if (isUserExist) {
    res.status(422).json({ message: "User already exist" });
  } else {
    // const newUser={id : uuid(),username : username , password : password}; // wrong initialization
    const id = uuid();
    const newUser = { id, username, password };

    usersData.users = [...usersData.users, newUser];
    const token = jwt.sign({ id: username }, "abcdef");
    res.json({
      username: username,
      token: token,
      message: `${username}'s profile has been created successfully`,
    });
  }
};

const SignInHandler = (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({ id: username }, "abcdef");
  const isUserVerified = usersData.users.some(
    (user) => user.username === username && user.password === password
  );
  if (isUserVerified) {
    res.json({
      username: username,
      message: "User logged in successfully",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials !!",
    });
  }
};

module.exports = { SignInHandler, SignUpHandler };
