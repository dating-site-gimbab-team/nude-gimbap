import { DislikeFeedDTO, LikeFeedDTO } from "@/infrastructure/api/feedback/dtos";
import { dislikeFeed, likeFeed } from "@/infrastructure/api/feedback/service";
import { useMutation } from "@tanstack/react-query";

export function useLikeFeed() {
  return useMutation({
    mutationKey: ["likeFeed"],
    mutationFn: (dto: LikeFeedDTO) => likeFeed(dto),
  });
}

export function useDislikeFeed() {
  return useMutation({
    mutationKey: ["dislikeFeed"],
    mutationFn: (dto: DislikeFeedDTO) => dislikeFeed(dto),
  });
}

