import { User } from "../../models/User.js";


export async function listUsers(req, res) {
  try{
    const users = await User.find();
    res.json({ users })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
