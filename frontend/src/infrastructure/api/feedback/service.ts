import { instance } from "../../client";
import { ResponseWithMetadata } from "../base_dtos";
import { ApiEndpoints } from "../constants";
import { DislikeFeedDTO, LikeFeedDTO } from "./dtos";

export async function likeFeed(dto: LikeFeedDTO): Promise<ResponseWithMetadata<{}>> {
  const res = await instance.post<ResponseWithMetadata<{}>>(
    ApiEndpoints.LIKE_FEED,
    { ...dto, userId: 1 }
  );
  return res.data;
}

export async function dislikeFeed(dto: DislikeFeedDTO): Promise<ResponseWithMetadata<{}>> {
  const res = await instance.post<ResponseWithMetadata<{}>>(
    ApiEndpoints.DISLIKE_FEED,
    { ...dto, userId: 1 }
  );
  return res.data;
}

