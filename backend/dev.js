import { spawn } from "child_process";
import dotenv from "dotenv";

dotenv.config();

function run(name, command, args, cwd = process.cwd()) {
  const proc = spawn(command, args, {
    cwd,
    stdio: "inherit",
    shell: true,
  });

  proc.on("close", (code) => {
    console.log(`${name} exited with code ${code}`);
  });
}

run(
  "RASA",
  process.env.RASA_PYTHON,
  ["-m", "rasa", "run", "--enable-api", "--cors", "*"],
  "../chatbot",
);

run(
  "ACTIONS",
  process.env.RASA_PYTHON,
  ["-m", "rasa", "run", "actions"],
  "../chatbot",
);

run("ML", process.env.ML_PYTHON, ["../ml-service/src/app.py"]);

run("BACKEND", "nodemon", ["../backend/server.js"]);

run("FRONTEND", "npm", ["run", "dev"], "../frontend");
