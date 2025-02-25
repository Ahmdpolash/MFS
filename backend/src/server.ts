import app from "./app";

import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(process.env.db_uri as string);

    app.listen(process.env.port, () => {
        console.log(`server running on port ${process.env.port}`);
        
        
    });
  } catch (error) {
    console.log(error);
  }
}
main();
