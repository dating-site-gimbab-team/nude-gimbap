import { getUsers } from "@/infrastructure/api/user/service";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(),
  });
}
