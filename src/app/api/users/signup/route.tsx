// first thing we have to do is connect to the database
import { connect } from "@/database/config.ts";

// import the user model
import User from "@/models/UserModel";

connect();
