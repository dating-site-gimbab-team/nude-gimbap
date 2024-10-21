import { instance } from "../../client";
import { ResponseWithMetadata } from "../base_dtos";
import { ApiEndpoints } from "../constants";
import { UserDTO } from "./dtos";

export async function getUsers(): Promise<ResponseWithMetadata<UserDTO[]>> {
  const res = await instance.get<ResponseWithMetadata<UserDTO[]>>(
    ApiEndpoints.GET_USERS,
  );
  return res.data;
}
