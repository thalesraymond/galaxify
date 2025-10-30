import LoginUserDto from "./login/LoginUserDto.js";
import UserLoginResponse from "./login/LoginUserResponse.js";
import RegisterUserDto from "./userRegister/RegisterUserDto.js";
import UserRegisterResponse from "./userRegister/UserRegisterResponse.js";
import { CreateHabitDto } from "./habits/CreateHabitDto.js";
import { UpdateHabitDto } from "./habits/UpdateHabitDto.js";
import { Habit } from "./habits/Habit.js";
import { CreateDailyDto } from "./dailies/CreateDailyDto.js";
import { UpdateDailyDto } from "./dailies/UpdateDailyDto.js";
import { Daily } from "./dailies/Daily.js";
import CreateTodoDto from "./todos/CreateTodoDto.js";
import UpdateTodoDto from "./todos/UpdateTodoDto.js";
import Todo from "./todos/Todo.js";

// user register
export type { RegisterUserDto, UserRegisterResponse };

// login
export type { LoginUserDto, UserLoginResponse };

// habits
export type { CreateHabitDto, UpdateHabitDto, Habit };

// dailies
export type { CreateDailyDto, UpdateDailyDto, Daily };
// todos
export type { CreateTodoDto, UpdateTodoDto, Todo };
