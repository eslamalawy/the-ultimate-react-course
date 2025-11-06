import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isPending: isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log("useSignup", user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },
    onError: (err) => {
      console.error(err);
      toast.error("An Error Occured while creating the account!");
    },
  });
  return { signup, isLoading };
}
